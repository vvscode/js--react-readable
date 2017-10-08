import * as api from "../utils/api";

export const COMMENTS_FETCH_BY_POST_ID = "COMMENTS_FETCH_BY_POST_ID";
export const COMMENTS_ADD_COMMENT = "COMMENTS_ADD_COMMENT";

export const fetchCommentsByPostid = (postId = null) => dispatch =>
  api.fetchCommentsByPostid(postId).then(comments =>
    dispatch({
      type: COMMENTS_FETCH_BY_POST_ID,
      comments
    })
  );

export const addComment = ({ postId, author, body }) => dispatch =>
  api.addComment({ postId, author, body }).then(comment =>
    dispatch({
      type: COMMENTS_ADD_COMMENT,
      comment
    })
  );
