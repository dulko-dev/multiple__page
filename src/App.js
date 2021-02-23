//library
import React, { lazy, useContext, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//utility
import { AuthContext } from "./components/Firebase/Auth";
import PrivateRoute from "./PrivateRoute";

const Welcome = lazy(() => import("./components/Welcome/Welcome"));
const TODO = lazy(() => import("./components/User/Todo/Todo"));
const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
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
  const { value, czoko } = useContext(AuthContext);
  const [user] = value;
  const loaded = czoko;

  return (
    <Router>
      <Switch>
        <Suspense fallback={loading()}>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {!loaded && (
            <>
              <PrivateRoute path="/to-do-list" user={user} component={TODO} />

              <PrivateRoute
                path="/calculator"
                user={user}
                component={Calculator}
              />
              <PrivateRoute
                path="/movies"
                user={user}
                component={MoviesDataBase}
              />
              <PrivateRoute
                exact
                path="/events"
                user={user}
                component={Events}
              />
              <PrivateRoute path="/events/news" user={user} component={News} />
              <PrivateRoute
                path="/events/sport"
                user={user}
                component={Sport}
              />
              <PrivateRoute path="/weather" user={user} component={Weather} />
            </>
          )}
        </Suspense>
      </Switch>
    </Router>
  );
}
