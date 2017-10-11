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
        path: `/${i.path}`
      }))
    ];
    return (
      <Menu>
        {list.map(i => (
          <Menu.Item key={i.path}>
            <NavLink to={i.path}>{i.name}</NavLink>
          </Menu.Item>
        ))}
        <Menu.Menu position="right" />
        <Menu.Menu position="right">
          <Menu.Item>
            <NavLink to="/post/new">New Post</NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps)(Header);
