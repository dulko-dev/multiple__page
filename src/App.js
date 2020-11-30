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
import GuarderRoute from "./GuarderRoute";
import { Auth } from "./components/Firebase/Auth";

export default function App() {


  return (
    <Auth>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset" component={Reset} />
          <GuarderRoute path="/to-do-list" component={TODO}/>
          <GuarderRoute path="/calculator" component={Calculator} />
          <GuarderRoute path="/entertainment" component={Entertainment} />
          <GuarderRoute path="/events" component={Events} />
          <GuarderRoute path="/weather" component={Weather} />
        </Switch>
      </Router>
    </Auth>
  );
}
