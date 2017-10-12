import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Divider, Header, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { fetchPost, votePost, deletePost } from "../actions/posts";
import { voteComment } from "../actions/comments";
import {
  fetchCommentsByPostid,
  addComment,
  updateComment,
  deleteComment
} from "../actions/comments";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";
import { bindActionCreators } from "redux";

import "./PostScreen.css";

class PostScreen extends Component {
  state = {
    commentModalOpen: false,
    commentToEdit: null
  };
  componentWillMount() {
    const { postId } = this.props.match.params;
    this.props.fetchPost(postId);
    this.props.fetchCommentsByPostid(postId);
  }

  onCommentSubmit = commentData => {
    commentData.body &&
      this.props.addComment({
        postId: this.props.match.params.postId,
        ...commentData
      });
  };

  onCommentUpdate = ({ body }) => {
    if (!body) {
      return;
    }
    this.props.updateComment({
      commentId: this.state.commentToEdit.id,
      body
    });
    this.closeCommentModal();
  };

  voteAction = delta => {
    const postId = this.props.post.id;
    this.props.votePost({ postId, delta });
  };

  voteComment = (commentId, delta) => {
    this.props.voteComment({ commentId, delta });
  };

  removeComment = commentId => {
    this.props.deleteComment(commentId);
  };

  deletePost = () => {
    if (window.confirm("Are you sure you want to delete post?")) {
      this.props.deletePost(this.props.post.id);
      this.props.history.push(`/${this.props.post.category}`);
    }
  };

  closeCommentModal = () =>
    this.setState({
      commentModalOpen: false,
      commentToEdit: null
    });

  editComment = comment =>
    this.setState({
      commentModalOpen: true,
      commentToEdit: comment
    });

  render() {
    const { post, comments } = this.props;
    return (
      <div>
        <Container textAlign="left">
          <i>{post.category}</i>
        </Container>
        <Container textAlign="center">
          <Header as="h1" className="postTitle">
            {post.title || "Untitled Post"}
            <sup className="controlPostButtons">
              <Link to={`/${post.category}/${post.id}/edit`}>
                <Icon name="write" size="small" />
              </Link>
              <Icon name="delete" onClick={this.deletePost} />
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
            editAction={this.editComment}
          />
          <Divider />
          <CommentForm onSubmit={this.onCommentSubmit} />
        </Container>
        <Modal
          size={"tiny"}
          open={this.state.commentModalOpen}
          onClose={this.closeCommentModal}
        >
          <Modal.Header>Edit comment</Modal.Header>
          <Modal.Content>
            <CommentForm
              {...this.state.commentToEdit}
              onSubmit={this.onCommentUpdate}
            />
          </Modal.Content>
        </Modal>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPost,
      votePost,
      deletePost,
      voteComment,
      fetchCommentsByPostid,
      addComment,
      updateComment,
      deleteComment
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
