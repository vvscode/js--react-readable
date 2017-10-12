import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostForm from "../components/PostForm";
import { addPost } from "../actions/posts";

export class PostAddScreen extends Component {
  onPostSubmit = ({ author, title, category, body }) => {
    this.props.addPost({ author, title, category, body });
    this.props.history.push("/");
  };
  render() {
    return (
      <Container>
        <Header>Add New Post</Header>
        <PostForm onSubmit={this.onPostSubmit} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPost
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(PostAddScreen);
