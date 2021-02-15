import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/Auth";
import User from "../User/User";
import login from "../../assets/login.png";
import plus from "../../assets/add.png";
import bg from "../../assets/fog-city2.jpg";

export default function Welcome() {
  const { czoko } = useContext(AuthContext);
  const loaded = czoko;

  return !loaded ? (
    <User />
  ) : (
    <div className="welcome">
      <img
        src={bg}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          left: "0",
          bottom: "0",
          zIndex: "-1",
        }}
      />
      <h1>Welcome your Dashboard</h1>
      <div className="welcome__icons">
        <NavLink
          className="welcome__navlink"
          to="/login"
          activeStyle={{
            borderRadius: "60%",
            border: "4px solid gold",
            outline: "none",
          }}
        >
          <div>
            <img
              src={login}
              alt="login"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </NavLink>
        <NavLink
          to="/register"
          className="welcome__navlink"
          activeStyle={{
            borderRadius: "60%",
            border: "4px solid gold",
            outline: "none",
          }}
        >
          <div>
            <img
              src={plus}
              alt="add user"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
