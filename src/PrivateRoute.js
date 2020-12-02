import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./components/Firebase/Auth";


function PrivateRoute({ component: Component, user, ...rest }) {
  const {czoko} = useContext(AuthContext)
  const loaded = czoko  
  return (
    <Route
      {...rest}
      render={(props) => {
        return !loaded ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

export default PrivateRoute