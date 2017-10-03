import * as api from "../utils/api";

export const CATEGORIES_FETCH = "CATEGORIES_FETCH";

export const fetchCategories = () => dispatch =>
  api.fetchCategories().then(({ categories }) =>
    dispatch({
      type: CATEGORIES_FETCH,
      categories
    })
  );
