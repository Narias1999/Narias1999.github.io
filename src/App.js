import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigator from "./components/Navigator";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
