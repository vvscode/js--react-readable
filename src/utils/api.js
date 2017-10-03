import uuid from "uuid/v1";

const BASE_URL = "http://localhost:3001";
const headers = { Authorization: "whatever-you-want" };

const getUrl = link => `${BASE_URL}${link}`;

export const fetchCategories = () =>
  fetch(getUrl("/categories"), { headers }).then(resp => resp.json());

export const fetchPosts = (category = null) => {
  const url = category ? `${category}/posts` : "/posts";
  return fetch(getUrl(url), { headers }).then(resp => resp.json());
};

export const createPost = ({
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

window.fetchPosts = fetchPosts;
window.createPost = createPost;
