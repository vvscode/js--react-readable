import React from "react";
import { Comment, Header, Icon } from "semantic-ui-react";
import Moment from "react-moment";

const CommentsList = ({ comments = [], voteAction }) => {
  if (!comments.length) {
    return null;
  }
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}:
      </Header>

      {comments.map(i => (
        <Comment key={i.id}>
          <Comment.Content>
            <Comment.Author as="span">{i.author}</Comment.Author>
            <Comment.Metadata>
              <Moment fromNow>{i.timestamp}</Moment>
              |{" "}
              <Icon
                name="dislike outline"
                className="voteButton"
                onClick={() => voteAction(i.id, -1)}
              />
              {i.voteScore}
              <Icon
                name="like outline"
                className="voteButton"
                onClick={() => voteAction(i.id, 1)}
              />
            </Comment.Metadata>
            <Comment.Text>{i.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default CommentsList;
