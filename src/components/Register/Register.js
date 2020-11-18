import React from "react";
import Welcome from "../Welcome/Welcome";
import user from "../../assets/login.png";
import password from "../../assets/password.png";
import email from "../../assets/email.png";

export default function Register() {
  return (
    <div className="register">
      <Welcome />
      <div className="register__form">
        <h3>Register</h3>
        <form>
          <label>
            <span>
              <img src={user} className="register__span" />
            </span>
            <input type="text" placeholder="enter your login" />
          </label>
          <label>
            <span>
              <img src={password} className="register__span" />
            </span>
            <input type="text" placeholder="enter your password" />
          </label>
          <label>
            <span>
              <img src={password} className="register__span" />
            </span>
            <input type="text" placeholder="repeat your password" />
          </label>
          <label>
            <span>
              <img src={email} className="register__span" />
            </span>
            <input type="text" placeholder="enter your email" />
          </label>
          <div className="register__checkbox">
            <input type="checkbox" />
            <span>Remember me!</span>
          </div>
          <button type="submit" className="register__button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
