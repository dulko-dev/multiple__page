import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Welcome from "../Welcome/Welcome";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import fire from "../Firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    pass: "",
    errFirebase: "",
  });

  const { register, errors, handleSubmit } = useForm();

  const history = useHistory();

  const handleSetState = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(state.email, state.pass)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, errFirebase: error.message }));
      });
  };

  return (
    <div className="login">
      <Welcome />
      <div className="login__form">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label>
            <span className="login__required">{errors.email?.message}</span>
            <span>
              <img src={email} alt="email" className="login__span" />
            </span>
            <input
              ref={register({
                required: "This is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email",
                },
              })}
              type="email"
              placeholder="enter your email"
              onChange={handleSetState}
              name="email"
            />
          </label>
          <label>
            <span className="login__required">{errors.pass?.message}</span>
            <span>
              <img src={password} alt="password" className="login__span" />
            </span>
            <input
              ref={register({
                required: "This is required",
                minLength: {
                  value: 8,
                  message: "You must have pass at least 6 characters",
                },
              })}
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
