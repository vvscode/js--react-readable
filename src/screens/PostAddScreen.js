import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";

import PostForm from "../components/PostForm";

export class PostAddScreen extends Component {
  onPostSubmit = postData => {
    debugger;
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

export default PostAddScreen;
