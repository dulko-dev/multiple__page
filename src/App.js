//library
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TODO from "./components/User/Todo/Todo";
import Calculator from "./components/User/Calculator/Calculator";
import MoviesDataBase from "./components/User/MoviesDataBase/MoviesDataBase";
import Events from "./components/User/Events/Events";
import Weather from "./components/User/Weather/Weather";
import News from "./components/User/Events/News/News";
import Sport from "./components/User/Events/Sport/Sport";
//utility
import { AuthContext } from "./components/Firebase/Auth";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const { value } = useContext(AuthContext);
  const [user] = value;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/to-do-list" user={user} component={TODO} />
        <PrivateRoute path="/calculator" user={user} component={Calculator} />
        <PrivateRoute path="/movies" user={user} component={MoviesDataBase} />
        <PrivateRoute exact path="/events" user={user} component={Events} />
        <PrivateRoute path="/events/news" user={user} component={News} />
        <PrivateRoute path="/events/sport" user={user} component={Sport} />
        <PrivateRoute path="/weather" user={user} component={Weather} />
      </Switch>
    </Router>
  );
}
