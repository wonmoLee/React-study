import React, { Component } from "react";
import About from "./page/About";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Nav from "./Nav";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
