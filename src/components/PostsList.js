import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/posts";

class PostsList extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPosts(this.props.category));
  }

  render() {
    const list = this.props.posts;
    console.log(list);
    return null;
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps)(PostsList);
