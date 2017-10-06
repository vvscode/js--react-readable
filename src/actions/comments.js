import * as api from "../utils/api";

export const COMMENTS_FETCH_BY_POST_ID = "COMMENTS_FETCH_BY_POST_ID";

export const fetchCommentsByPostid = (postId = null) => dispatch =>
  api.fetchCommentsByPostid(postId).then(comments =>
    dispatch({
      type: COMMENTS_FETCH_BY_POST_ID,
      comments
    })
  );
