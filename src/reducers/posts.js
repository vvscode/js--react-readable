import { POSTS_FETCH, POSTS_ADD } from "../actions/posts";

const inintialState = [];

export default (state = inintialState, action) => {
  switch (action.type) {
    case POSTS_FETCH: {
      return action.posts;
    }
    case POSTS_ADD: {
      return state.find(i => i.id === action.post.id)
        ? [...state]
        : [action.post, ...state];
    }
    default: {
      return state;
    }
  }
};
