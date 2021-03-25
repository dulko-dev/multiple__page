import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, log, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!log) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
