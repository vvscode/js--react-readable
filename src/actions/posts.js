import * as api from "../utils/api";

export const POSTS_FETCH = "POSTS_FETCH";
export const POSTS_FETCH_POST = "POSTS_FETCH_POST";

export const fetchPosts = (category = null) => dispatch =>
  api.fetchPosts(category).then(posts =>
    dispatch({
      type: POSTS_FETCH,
      category,
      posts
    })
  );

export const fetchPost = id => dispatch =>
  api.fetchPost(id).then(post =>
    dispatch({
      type: POSTS_FETCH_POST,
      post
    })
  );
