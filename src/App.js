import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/ResetAccount/Reset";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset" component={Reset} />
        </Switch>
      </Router>
    </div>
  );
}
