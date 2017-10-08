import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Divider, Header } from "semantic-ui-react";

import { fetchPost } from "../actions/posts";
import { fetchCommentsByPostid, addComment } from "../actions/comments";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

class PostScreen extends Component {
  componentWillMount() {
    const { postId } = this.props.match.params;
    this.props.dispatch(fetchPost(postId));
    this.props.dispatch(fetchCommentsByPostid(postId));
  }

  onCommentSubmit = commentData => {
    this.props.dispatch(
      addComment({
        postId: this.props.match.params.postId,
        ...commentData
      })
    );
  };

  render() {
    const { post, comments } = this.props;
    return (
      <div>
        <Container textAlign="left">
          <i>{post.category}</i>
        </Container>
        <Container textAlign="center">
          <Header as="h1">{post.title}</Header>
        </Container>
        <Container textAlign="right">
          (c) <strong>{post.author}</strong>
        </Container>
        <Container textAlign="justified">
          <Divider />

          {(post.body || "")
            .split("\n")
            .map((i, index) => <p key={index}>{i}</p>)}
          {comments.length ? <Divider /> : null}
          <CommentsList comments={comments} />
          <Divider />
          <CommentForm onSubmit={this.onCommentSubmit} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ activePost, activePostComments }) => ({
  post: activePost,
  comments: activePostComments
});

export default connect(mapStateToProps)(PostScreen);
