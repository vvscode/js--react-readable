import { POSTS_FETCH } from "../actions/posts";

const inintialState = [];

export default (state = inintialState, action) => {
  switch (action.type) {
    case POSTS_FETCH: {
      return action.posts;
    }
    default: {
      return state;
    }
  }
};
