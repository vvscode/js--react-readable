import * as api from "../utils/api";

export const POSTS_FETCH = "POSTS_FETCH";

export const fetchPosts = (category = null) => dispatch =>
  api.fetchPosts(category).then(posts =>
    dispatch({
      type: POSTS_FETCH,
      category,
      posts
    })
  );
