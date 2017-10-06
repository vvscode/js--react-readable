import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const CommentsList = ({ comments = [] }) => {
  if (!comments.length) {
    return null;
  }
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments:
      </Header>

      {comments.map(i => (
        <Comment key={i.id}>
          <Comment.Content>
            <Comment.Author as="span">{i.author}</Comment.Author>
            <Comment.Metadata>
              <div>{i.timestamp}</div>
            </Comment.Metadata>
            <Comment.Text>{i.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default CommentsList;
