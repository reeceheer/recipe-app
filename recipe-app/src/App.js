import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/recipe" exact component={Recipe} />
      </Switch>
    </Router>
  );
};

export default App;
