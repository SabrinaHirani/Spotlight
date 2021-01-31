import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/home.jsx";
import Checker from "./components/checker.jsx";

import './styles.css'

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/checker" component={Checker} />
      <Redirect to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
