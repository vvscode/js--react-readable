import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPost, updatePost } from "../actions/posts";
import PostForm from "../components/PostForm";

export class PostEditScreen extends Component {
  componentWillMount() {
    const { postId } = this.props.match.params;
    this.props.fetchPost(postId);
  }

  onPostSubmit = ({ title, body }) => {
    const { postId } = this.props.match.params;

    this.props.updatePost({
      title,
      body,
      postId
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <Container>
        <Header>Edit Post</Header>
        <PostForm {...this.props.post} onSubmit={this.onPostSubmit} />
      </Container>
    );
  }
}

const mapStateToProps = ({ activePost }) => ({
  post: activePost
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePost,
      fetchPost
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostEditScreen);
