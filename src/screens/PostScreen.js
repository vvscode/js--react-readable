import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Divider, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { fetchPost, votePost } from "../actions/posts";
import { voteComment } from "../actions/comments";
import {
  fetchCommentsByPostid,
  addComment,
  deleteComment
} from "../actions/comments";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

import "./PostScreen.css";

class PostScreen extends Component {
  componentWillMount() {
    const { postId } = this.props.match.params;
    this.props.dispatch(fetchPost(postId));
    this.props.dispatch(fetchCommentsByPostid(postId));
  }

  onCommentSubmit = commentData => {
    commentData.body &&
      this.props.dispatch(
        addComment({
          postId: this.props.match.params.postId,
          ...commentData
        })
      );
  };

  voteAction = delta => {
    const postId = this.props.post.id;
    this.props.dispatch(votePost({ postId, delta }));
  };

  voteComment = (commentId, delta) => {
    this.props.dispatch(voteComment({ commentId, delta }));
  };

  removeComment = commentId => {
    this.props.dispatch(deleteComment(commentId));
  };

  render() {
    const { post, comments } = this.props;
    return (
      <div>
        <Container textAlign="left">
          <i>{post.category}</i>
        </Container>
        <Container textAlign="center">
          <Header as="h1" className="postTitle">
            {post.title}
            <sup>
              <Link
                to={`/${post.category}/${post.id}/edit`}
                className="editIcon"
              >
                <Icon name="write" size="small" />
              </Link>
            </sup>
          </Header>
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
          <div>
            <Icon
              name="dislike outline"
              className="voteButton"
              onClick={() => this.voteAction(-1)}
            />
            <span>{post.voteScore} </span>
            <Icon
              name="like outline"
              className="voteButton"
              onClick={() => this.voteAction(1)}
            />
          </div>
          <CommentsList
            comments={comments}
            voteAction={this.voteComment}
            removeAction={this.removeComment}
          />
          <Divider />
          <CommentForm onSubmit={this.onCommentSubmit} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, activePost, comments }) => {
  return {
    post: posts.find(i => i.id === activePost.id) || activePost,
    comments: comments[activePost.id] || []
  };
};

export default connect(mapStateToProps)(PostScreen);
