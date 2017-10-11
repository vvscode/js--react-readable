import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

import { fetchPosts } from "../actions/posts";
import PostListItem from "./PostListItem";

class PostsList extends Component {
  fetchCategoryPosts(props = this.props) {
    this.props.dispatch(fetchPosts(props.category));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.fetchCategoryPosts(nextProps);
    }
  }
  componentWillMount() {
    this.fetchCategoryPosts();
  }

  render() {
    const { posts, comments } = this.props;
    return (
      <Card.Group>
        {posts.map(i => (
          <PostListItem
            key={i.id}
            post={i}
            commentsCount={(comments[i.id] || []).length}
          />
        ))}
      </Card.Group>
    );
  }
}

const mapStateToProps = ({ posts, comments }) => {
  return {
    posts,
    comments
  };
};

export default connect(mapStateToProps)(PostsList);
