import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./PostListItem.css";

const BODY_PREVIEW_LIMIT = 100;

const PostListItem = ({
  post,
  commentsCount,
  voteAction,
  editAction,
  deleteAction
}) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`/${post.category}/${post.id}`}>
          {post.title || "Untitled post"}
        </Link>
        <div className="controlButtons">
          <Icon name="edit" onClick={() => editAction(post)} />
          <Icon name="delete" onClick={() => deleteAction(post.id)} />
        </div>
      </Card.Header>
      <Card.Meta>{post.author}</Card.Meta>
      <Card.Description className="postBody">
        {post.body.length > BODY_PREVIEW_LIMIT
          ? `${post.body.substr(0, BODY_PREVIEW_LIMIT)}...`
          : post.body}
      </Card.Description>
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
