import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

import { fetchPost } from "../actions/posts";

class PostScreen extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPost(this.props.match.params.postId));
  }

  render() {
    const { post } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>{post.title}</Card.Header>
          <Card.Meta>{post.author}</Card.Meta>
          <Card.Description>{post.body}</Card.Description>
          <Card.Meta>{post.category}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = ({ activePost }) => ({
  post: activePost
});

export default connect(mapStateToProps)(PostScreen);
