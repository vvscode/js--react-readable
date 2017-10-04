import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
    const list = [
      {
        name: "Home",
        path: "/"
      },
      ...this.props.categories.map(i => ({
        ...i,
        path: `/category/${i.path}`
      }))
    ];
    return (
      <Menu>
        {list.map(i => (
          <Menu.Item key={i.path}>
            <NavLink to={i.path}>{i.name}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps)(Header);
