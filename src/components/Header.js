import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
    const list = [
      {
        name: "Home",
        path: "/"
      },
      ...this.props.categories
    ];
    console.log(this.props.categories);
    return (
      <Menu>
        {list.map(i => (
          <Menu.Item key={i.path}>
            <Link to={i.path}>{i.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  debugger;
  return {
    categories
  };
};

export default connect(mapStateToProps)(Header);
