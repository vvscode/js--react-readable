import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Card } from "semantic-ui-react";

import { fetchPosts, votePost, deletePost } from "../actions/posts";
import PostListItem from "./PostListItem";
import sortBy from "../utils/sortBy";

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

  voteAction = (postId, delta) => {
    this.props.dispatch(votePost({ postId, delta }));
  };

  editPost = post => {
    this.props.history.push(`/${post.category}/${post.id}/edit`);
  };

  deletePost = postId => {
    window.confirm("Are you sure you want to remove the post?") &&
      this.props.dispatch(deletePost(postId));
  };

  render() {
    const { posts, comments } = this.props;
    return (
      <Card.Group>
        {posts.map(i => (
          <PostListItem
            key={i.id}
            post={i}
            commentsCount={(comments[i.id] || []).length}
            voteAction={this.voteAction}
            editAction={this.editPost}
            deleteAction={this.deletePost}
          />
        ))}
      </Card.Group>
    );
  }
}

const mapStateToProps = ({ posts, comments, sortOrder }) => {
  return {
    posts: sortBy(posts, sortOrder),
    comments,
    sortOrder
  };
};

export default withRouter(connect(mapStateToProps)(PostsList));
