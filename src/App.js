import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigator />
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
