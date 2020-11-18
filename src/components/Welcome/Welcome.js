import React from "react";
import { NavLink } from "react-router-dom";
import login from "../../assets/login.png";
import plus from "../../assets/add.png";
import reset from "../../assets/reset.png";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to my Site</h1>
      <div className="welcome__icons">
        <NavLink
          className="welcome__navlink"
          to="/login"
          activeStyle={{
            borderRadius: "60%",
            border: "2px solid gold",
            outline: "none",
          }}
        >
          <div>
            <img src={login} alt='login' style={{ width: "50px", height: "50px" }} />
          </div>
        </NavLink>
        <NavLink
          to="/register"
          className="welcome__navlink"
          activeStyle={{
            borderRadius: "60%",
            border: "2px solid gold",
            outline: "none",
          }}
        >
          <div>
            <img src={plus} alt='add user' style={{ width: "50px", height: "50px" }} />
          </div>
        </NavLink>
        <NavLink
          to="/reset"
          className="welcome__navlink"
          activeStyle={{
            borderRadius: "60%",
            border: "2px solid gold",
            outline: "none",
          }}
        >
          <div>
            <img src={reset} alt='reset password' style={{ width: "50px", height: "50px" }} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
