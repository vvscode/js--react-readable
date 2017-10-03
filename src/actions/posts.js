export const POSTS_FETCH = "POSTS_FETCH";

export const fetchPosts = (category = null) => dispatch => ({
  type: POSTS_FETCH,
  category
});
