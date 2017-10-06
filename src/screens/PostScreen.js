import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Divider, Header } from "semantic-ui-react";

import { fetchPost } from "../actions/posts";
import { fetchCommentsByPostid } from "../actions/comments";
import CommentsList from "../components/CommentsList";

class PostScreen extends Component {
  componentWillMount() {
    const { postId } = this.props.match.params;
    this.props.dispatch(fetchPost(postId));
    this.props.dispatch(fetchCommentsByPostid(postId));
  }

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
          <Divider />
          <CommentsList comments={comments} />
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
