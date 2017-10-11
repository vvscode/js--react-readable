export const SET_SORT_ORDER = "SET_SORT_ORDER";

export const setSortOrder = order => dispatch =>
  dispatch({
    type: SET_SORT_ORDER,
    order
  });
