import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Divider, Header } from "semantic-ui-react";

import { fetchPost } from "../actions/posts";

class PostScreen extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPost(this.props.match.params.postId));
  }

  render() {
    const { post } = this.props;
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
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ activePost }) => ({
  post: activePost
});

export default connect(mapStateToProps)(PostScreen);
