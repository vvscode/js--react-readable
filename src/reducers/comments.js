import {
  COMMENTS_FETCH_BY_POST_ID,
  COMMENTS_ADD_COMMENT
} from "../actions/comments";

const inintialState = {};

export default (state = inintialState, action) => {
  switch (action.type) {
    case COMMENTS_FETCH_BY_POST_ID: {
      return {
        ...state,
        [action.postId]: action.comments
      };
    }
    case COMMENTS_ADD_COMMENT: {
      return {
        ...state,
        [action.postId]: [...(state[action.postId] || []), action.comment]
      };
    }
    default: {
      return state;
    }
  }
};
