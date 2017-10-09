import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import PostScreen from "./screens/PostScreen";
import PostEditScreen from "./screens/PostEditScreen";
import PostAddScreen from "./screens/PostAddScreen";
import Header from "./components/Header";
import { fetchCategories } from "./actions/categories";

export class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/category/:category" component={CategoryScreen} />
            <Route exact path="/post/new" component={PostAddScreen} />
            <Route exact path="/post/:postId" component={PostScreen} />
            <Route path="/post/:postId/edit" component={PostEditScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
