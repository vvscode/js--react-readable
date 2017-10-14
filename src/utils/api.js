import uuid from "uuid/v1";

const BASE_URL = "http://localhost:3001";
const headers = {
  Authorization: "whatever-you-want",
  "Content-Type": "application/json"
};

const getUrl = link => `${BASE_URL}${link}`;

const processResponse = resp =>
  resp.json().then(data => {
    if (data.error) {
      return Promise.reject(data);
    }
    // empty object means that there were no data found
    if (!Array.isArray(data) && !Object.keys(data).length) {
      return Promise.reject({
        error: "No data",
        data
      });
    }
    return data;
  });

export const fetchCategories = () =>
  fetch(getUrl("/categories"), { headers }).then(processResponse);

export const fetchPosts = (category = null) => {
  const url = category ? `/${category}/posts` : "/posts";
  return fetch(getUrl(url), { headers }).then(processResponse);
};

export const fetchPost = id =>
  fetch(getUrl(`/posts/${id}`), { headers }).then(processResponse);

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
  }).then(processResponse);

export const fetchCommentsByPostid = id =>
  fetch(getUrl(`/posts/${id}/comments`), { headers }).then(processResponse);

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
  }).then(processResponse);

export const votePost = ({ postId, delta }) => {
  let option = +delta > 0 ? "upVote" : "downVote";
  return fetch(getUrl(`/posts/${postId}`), {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  }).then(processResponse);
};

export const updatePost = ({ postId, title, body }) =>
  fetch(getUrl(`/posts/${postId}`), {
    method: "PUT",
    headers,
    body: JSON.stringify({ title, body })
  }).then(processResponse);

export const deletePost = postId =>
  fetch(getUrl(`/posts/${postId}`), {
    method: "DELETE",
    headers
  }).then(processResponse);

export const voteComment = ({ commentId, delta }) => {
  let option = +delta > 0 ? "upVote" : "downVote";
  return fetch(getUrl(`/comments/${commentId}`), {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  }).then(processResponse);
};

export const updateComment = ({ commentId, body }) =>
  fetch(getUrl(`/comments/${commentId}`), {
    method: "PUT",
    headers,
    body: JSON.stringify({ timestamp: Date.now(), body })
  }).then(processResponse);

export const deleteComment = commentId =>
  fetch(getUrl(`/comments/${commentId}`), {
    method: "DELETE",
    headers
  }).then(processResponse);
