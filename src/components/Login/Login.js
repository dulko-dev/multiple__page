import React from "react";
import Welcome from "../Welcome/Welcome";
import password from "../../assets/password.png";
import email from "../../assets/email.png";

export default function Login() {
  return (
    <div className="login">
      <Welcome />
      <div className="login__form">
        <h3>Login</h3>
        <form>
          <label>
            <span>
              <img src={email} alt="email" className="login__span" />
            </span>
            <input type="text" placeholder="enter your email" />
          </label>
          <label>
            <span>
              <img src={password} alt="password" className="login__span" />
            </span>
            <input type="text" placeholder="enter your password" />
          </label>
          <div className="login__checkbox">
            <input type="checkbox" />
            <span>Remember me!</span>
          </div>
          <button type="submit" className="login__button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
