import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigator />
        <Route path="/" component={About} exact />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
