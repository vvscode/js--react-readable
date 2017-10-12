import * as api from "../utils/api";
import { fetchCommentsByPostid } from "./comments";

export const POSTS_FETCH = "POSTS_FETCH";
export const POSTS_FETCH_POST = "POSTS_FETCH_POST";
export const POSTS_ADD = "POSTS_ADD";
export const POST_UPDATE = "POST_UPDATE";
export const POST_DELETE = "POST_DELETE";

export const fetchPosts = (category = null) => dispatch => {
  const postsPromise = api.fetchPosts(category);
  postsPromise.then(posts =>
    posts.forEach(({ id }) => fetchCommentsByPostid(id)(dispatch))
  );

  return postsPromise.then(posts =>
    dispatch({
      type: POSTS_FETCH,
      category,
      posts
    })
  );
};

export const fetchPost = id => dispatch => {
  fetchCommentsByPostid(id)(dispatch);
  return api.fetchPost(id).then(post =>
    dispatch({
      type: POSTS_FETCH_POST,
      post
    })
  );
};

export const addPost = ({ author, title, category, body }) => dispatch =>
  api
    .addPost({
      author,
      title,
      category,
      body
    })
    .then(post =>
      dispatch({
        type: POSTS_ADD,
        post
      })
    );

export const updatePost = ({ postId, title, body }) => dispatch =>
  api.updatePost({ postId, title, body }).then(post =>
    dispatch({
      type: POST_UPDATE,
      post
    })
  );

export const votePost = ({ postId, delta }) => dispatch =>
  api.votePost({ postId, delta }).then(post =>
    dispatch({
      type: POST_UPDATE,
      post
    })
  );

export const deletePost = postId => dispatch =>
  api.deletePost(postId).then(post =>
    dispatch({
      type: POST_DELETE,
      post
    })
  );
