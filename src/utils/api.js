const BASE_URL = "http://localhost:3001";
const headers = { Authorization: "whatever-you-want" };

const getUrl = link => `${BASE_URL}${link}`;

export const fetchCategories = () =>
  fetch(getUrl("/categories"), { headers }).then(resp => resp.json());

export const fetchPosts = (category = null) => {
  const url = category ? `${category}/posts` : "/posts";
  return fetch(getUrl(url)).then(resp => resp.json());
};
