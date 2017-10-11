import React from "react";
import PostsList from "../components/PostsList";
import SortControls from "../components/SortControls";

const CategoryScreen = ({ match }) => {
  const { category } = match.params;
  return (
    <div>
      <h1>{category}</h1>
      <div>
        <SortControls />
      </div>
      <hr />
      <PostsList category={category} />
    </div>
  );
};

export default CategoryScreen;
