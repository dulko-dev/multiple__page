import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/ResetAccount/Reset";
import fire from "./components/Firebase/firebaseConfig";

export const contex = createContext();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return (
    <contex.Provider value={user}>
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
    </contex.Provider>
  );
}
