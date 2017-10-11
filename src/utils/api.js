import uuid from "uuid/v1";

const BASE_URL = "http://localhost:3001";
const headers = {
  Authorization: "whatever-you-want",
  "Content-Type": "application/json"
};

const getUrl = link => `${BASE_URL}${link}`;

export const fetchCategories = () =>
  fetch(getUrl("/categories"), { headers }).then(resp => resp.json());

export const fetchPosts = (category = null) => {
  const url = category ? `/${category}/posts` : "/posts";
  return fetch(getUrl(url), { headers }).then(resp => resp.json());
};

export const fetchPost = id =>
  fetch(getUrl(`/posts/${id}`), { headers }).then(resp => resp.json());

export const addPost = ({
  id = uuid(),
  timestamp = Date.now(),
  title,
  body,
  author = "John Doe",
  category
}) =>
  fetch(getUrl("/posts"), {
    method: "POST",
    headers,
    body: JSON.stringify({
      id,
      timestamp,
      title,
      body,
      author,
      category
    })
  }).then(resp => resp.json());

export const fetchCommentsByPostid = id =>
  fetch(getUrl(`/posts/${id}/comments`), { headers }).then(resp => resp.json());

export const addComment = ({ postId, author, body }) =>
  fetch(getUrl("/comments"), {
    method: "POST",
    headers,
    body: JSON.stringify({
      id: uuid(),
      timestamp: Date.now(),
      parentId: postId,
      author,
      body
    })
  }).then(resp => resp.json());

export const votePost = ({ postId, delta }) => {
  let option = +delta > 0 ? "upVote" : "downVote";
  return fetch(getUrl(`/posts/${postId}`), {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  }).then(resp => resp.json());
};

export const updatePost = ({ postId, title, body }) =>
  fetch(getUrl(`/posts/${postId}`), {
    method: "PUT",
    headers,
    body: JSON.stringify({ title, body })
  }).then(resp => resp.json());

export const deletePost = postId =>
  fetch(getUrl(`/posts/${postId}`), {
    method: "DELETE",
    headers
  }).then(resp => resp.json());

export const voteComment = ({ commentId, mark }) => {
  let option = +mark > 0 ? "upVote" : "downVote";
  return fetch(getUrl(`/comments/${commentId}`), {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  }).then(resp => resp.json());
};

export const updateComment = ({ commentId, body }) =>
  fetch(getUrl(`/comments/${commentId}`), {
    method: "PUT",
    headers,
    body: JSON.stringify({ timestamp: Date.now(), body })
  }).then(resp => resp.json());

export const deleteComment = commentId =>
  fetch(getUrl(`/comments/${commentId}`), {
    method: "DELETE",
    headers
  }).then(resp => resp.json());
