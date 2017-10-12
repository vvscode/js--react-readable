import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import PostScreen from "./screens/PostScreen";
import PostEditScreen from "./screens/PostEditScreen";
import PostAddScreen from "./screens/PostAddScreen";
import NotFound from "./screens/NotFound";
import Header from "./components/Header";
import { fetchCategories } from "./actions/categories";

export class App extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/:category" component={CategoryScreen} />
            <Route exact path="/post/new" component={PostAddScreen} />
            <Route exact path="/:category/:postId" component={PostScreen} />
            <Route path="/:category/:postId/edit" component={PostEditScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategories
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
