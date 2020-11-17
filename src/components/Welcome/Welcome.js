import React from "react";
import login from "../../assets/login.png";
import plus from "../../assets/add.png";
import reset from "../../assets/reset.png";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to my Site</h1>
      <div className="welcome__icons">
        <div>
          <img src={login} style={{ width: "50px", height: "50px" }} />
        </div>
        <div>
          <img src={plus} style={{ width: "50px", height: "50px" }} />
        </div>
        <div>
          <img src={reset} style={{ width: "50px", height: "50px" }} />
        </div>
      </div>
    </div>
  );
}
