import { CATEGORIES_FETCH } from "../actions/categories";

const inintialState = [];

export default (state = inintialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH: {
      return [...action.categories];
    }
    default: {
      return state;
    }
  }
};
