import { POSTS_FETCH, POSTS_ADD, POST_UPDATE } from "../actions/posts";

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
    case POST_UPDATE: {
      const post = action.post;
      return state.map(
        i =>
          i.id === post.id
            ? {
                ...i,
                ...post
              }
            : i
      );
    }
    default: {
      return state;
    }
  }
};
