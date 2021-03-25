//library
import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//utility
import PrivateRoute from "./PrivateRoute";
import Login from "../src/components/Login/Login.js";
import Register from "../src/components/Register/Register";
import { AuthContext } from "./components/Firebase/Auth";

const Welcome = lazy(() => import("./components/Welcome/Welcome"));
const TODO = lazy(() => import("./components/User/Todo/Todo"));
const Calculator = lazy(() =>
  import("./components/User/Calculator/Calculator")
);
const MoviesDataBase = lazy(() =>
  import("./components/User/MoviesDataBase/MoviesDataBase")
);
const Events = lazy(() => import("./components/User/Events/Events"));
const Weather = lazy(() => import("./components/User/Weather/Weather"));
const News = lazy(() => import("./components/User/Events/News/News"));
const Sport = lazy(() => import("./components/User/Events/Sport/Sport"));
const loading = () => <div className="loader"></div>;

export default function App() {
  const { czoko } = useContext(AuthContext);
  const loaded = czoko;

  return (
    <Router>
      <Switch>
        <Suspense fallback={loading()}>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/to-do-list" log={loaded} component={TODO} />
          <PrivateRoute
            path="/calculator"
            log={loaded}
            component={Calculator}
          />
          <PrivateRoute
            path="/movies"
            log={loaded}
            component={MoviesDataBase}
          />
          <PrivateRoute exact path="/events" log={loaded} component={Events} />
          <PrivateRoute path="/events/news" log={loaded} component={News} />
          <PrivateRoute path="/events/sport" log={loaded} component={Sport} />
          <PrivateRoute path="/weather" log={loaded} component={Weather} />
        </Suspense>
      </Switch>
    </Router>
  );
}
