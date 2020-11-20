import React, { useContext, useState } from "react";
import Welcome from "../Welcome/Welcome";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import fire from "../Firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    pass: "",
  });

  const history = useHistory();

  const handleSetState = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(state.email, state.pass)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div className="login">
      <Welcome />
      <div className="login__form">
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <label>
            <span>
              <img src={email} alt="email" className="login__span" />
            </span>
            <input
              type="email"
              placeholder="enter your email"
              onChange={handleSetState}
              name="email"
            />
          </label>
          <label>
            <span>
              <img src={password} alt="password" className="login__span" />
            </span>
            <input
              type="password"
              name="pass"
              placeholder="enter your password"
              onChange={handleSetState}
            />
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
