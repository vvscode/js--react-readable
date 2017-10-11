import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";

import { setSortOrder } from "../actions/sortOrder";
import "./SortControls.css";

const sortings = [
  {
    field: "timestamp",
    title: "By Date"
  },
  {
    field: "voteScore",
    title: "By Score"
  }
];

class SortControls extends Component {
  changeSorting = order => {
    if (`${this.props.sortOrder}`.indexOf(order) >= 0) {
      if (this.props.sortOrder && this.props.sortOrder[0] === "-") {
        order = null;
      } else {
        order = `-${order}`;
      }
    }

    this.props.dispatch(setSortOrder(order));
  };
  render() {
    const { sortOrder } = this.props;

    return (
      <div>
        <Button.Group className="sortControls" basic>
          {sortings.map(i => {
            const upChevron = sortOrder === i.field;
            const downChevron = sortOrder === `-${i.field}`;
            const chevron = upChevron ? "up" : "down";
            return (
              <Button
                active={upChevron || downChevron}
                onClick={() => this.changeSorting(i.field)}
                className="sortingButton"
                key={i.field}
                size="mini"
                compact
              >
                {i.title}
                {upChevron || downChevron ? (
                  <Icon name={"chevron " + chevron} />
                ) : null}
              </Button>
            );
          })}
        </Button.Group>
      </div>
    );
  }
}

const mapStateToProps = ({ sortOrder }) => {
  return {
    sortOrder
  };
};

export default connect(mapStateToProps)(SortControls);
