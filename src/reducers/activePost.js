import { POSTS_FETCH_POST } from "../actions/posts";

const inintialState = {};

export default (state = inintialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_POST: {
      return action.post;
    }
    default: {
      return state;
    }
  }
};
