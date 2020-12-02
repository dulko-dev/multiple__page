import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/ResetAccount/Reset";
import TODO from "./components/User/Todo/Todo";
import Calculator from "./components/User/Calculator/Calculator";
import Entertainment from "./components/User/Entertainment/Entertainment";
import Events from "./components/User/Events/Events";
import Weather from "./components/User/Weather/Weather";
import { AuthContext } from "./components/Firebase/Auth";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const { value, czoko } = useContext(AuthContext);
  const [user, setUser] = value;
  const loaded = czoko;

  console.log(loaded);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={Reset} />

        {!loaded && (
          <>
            <PrivateRoute
              exact
              path="/to-do-list"
              user={user}
              component={TODO}
            />

            <PrivateRoute
              exact
              path="/calculator"
              user={user}
              component={Calculator}
            />
            <PrivateRoute
              exact
              path="/entertainment"
              user={user}
              component={Entertainment}
            />
            <PrivateRoute exact path="/events" user={user} component={Events} />
            <PrivateRoute
              exact
              path="/weather"
              user={user}
              component={Weather}
            />
          </>
        )}
      </Switch>
    </Router>
  );
}
