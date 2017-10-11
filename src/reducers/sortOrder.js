import { SET_SORT_ORDER } from "../actions/sortOrder";

const inintialState = null;

export default (state = inintialState, action) => {
  switch (action.type) {
    case SET_SORT_ORDER: {
      return action.order;
    }
    default: {
      return state;
    }
  }
};
