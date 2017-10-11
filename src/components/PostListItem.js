import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PostListItem = ({ post, commentsCount }) => (
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
    </Card.Content>
  </Card>
);

export default PostListItem;
