import {
  COMMENTS_FETCH_BY_POST_ID,
  COMMENTS_ADD_COMMENT,
  COMMENTS_UPDATE_COMMENT
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
    case COMMENTS_UPDATE_COMMENT: {
      const comment = action.comment;
      const postId = comment.parentId;
      const comments = state[postId] || [];
      return {
        ...state,
        [postId]: comments.map(i => (i.id === comment.id ? comment : i))
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
