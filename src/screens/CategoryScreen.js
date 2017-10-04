import React from "react";
import PostsList from "../components/PostsList";

const CategoryScreen = ({ match }) => {
  const { category } = match.params;
  return (
    <div>
      <h1>{category}</h1>
      <PostsList category={category} />;
    </div>
  );
};

export default CategoryScreen;
