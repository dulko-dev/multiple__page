import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./components/Firebase/Auth";

const GuarderRoute = ({ component: Component, auth, ...rest }) => {
  const {value2} = useContext(AuthContext)
  const [isAuth, setIsAuth] = value2
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default GuarderRoute;
