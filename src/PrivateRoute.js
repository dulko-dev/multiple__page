import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./components/Firebase/Auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { logInUser } = useContext(AuthContext);
  const log = logInUser;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (log) {
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
