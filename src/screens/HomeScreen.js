import React, { Component } from "react";

import PostsList from "../components/PostsList";
import SortControls from "../components/SortControls";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <div>
          <SortControls />
        </div>
        <PostsList />
      </div>
    );
  }
}

export default HomeScreen;
