import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/ResetAccount/Reset";
import Todo from "./components/User/Todo/Todo";
import Calculator from "./components/User/Calculator/Calculator";
import Entertainment from "./components/User/Entertainment/Entertainment";
import Events from "./components/User/Events/Events";
import Weather from "./components/User/Weather/Weather";
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
            <Route path="/to-do-list" component={Todo} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/events" component={Events} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </Router>
      </div>
    </contex.Provider>
  );
}
