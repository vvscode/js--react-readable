import { COMMENTS_FETCH_BY_POST_ID } from "../actions/comments";

const inintialState = [];

export default (state = inintialState, action) => {
  switch (action.type) {
    case COMMENTS_FETCH_BY_POST_ID: {
      return action.comments;
    }
    default: {
      return state;
    }
  }
};
