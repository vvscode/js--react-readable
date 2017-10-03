import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import PostScreen from "./screens/PostScreen";
import PostEditScreen from "./screens/PostEditScreen";
import PostAddScreen from "./screens/PostAddScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route
              exact
              path="/category/:category"
              component={CategoryScreen}
            />
            <Route exact path="/post/new" component={PostAddScreen} />
            <Route exact path="/post/:postId" component={PostScreen} />
            <Route exact path="/post/:postId/edit" component={PostEditScreen} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
