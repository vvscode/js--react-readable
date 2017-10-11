import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PostListItem = ({ post, commentsCount, voteAction }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`/${post.category}/${post.id}`}>
          {post.title || "Untitled post"}
        </Link>
      </Card.Header>
      <Card.Meta>{post.author}</Card.Meta>
      <Card.Description>{post.body}</Card.Description>
      <Card.Meta>
        {post.category}
        {!!commentsCount &&
          ` ( ${commentsCount} ${commentsCount === 1
            ? "comment"
            : "comments"} )`}
      </Card.Meta>
      <Card.Meta>
        <Icon
          name="dislike outline"
          className="voteButton"
          onClick={() => voteAction(post.id, -1)}
        />
        {post.voteScore}
        <Icon
          name="like outline"
          className="voteButton"
          onClick={() => voteAction(post.id, 1)}
        />
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default PostListItem;
