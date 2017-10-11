import { combineReducers } from "redux";

import categories from "./categories";
import posts from "./posts";
import activePost from "./activePost";
import activePostComments from "./activePostComments";
import comments from "./comments";

export default combineReducers({
  categories,
  posts,
  activePost,
  activePostComments,
  comments
});
