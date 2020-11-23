import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Welcome from "../Welcome/Welcome";
import user from "../../assets/login.png";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import fire from "../Firebase/firebaseConfig";

export default function Register() {
  const [state, setState] = useState({
    userName: "",
    userEmail: "",
    pass: "",
    secondPass: "",
    isChecked: false,
    errFirebase: "",
  });

  const { register, handleSubmit, errors, watch } = useForm();

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setState((prevState) => ({
      ...prevState,
      isChecked: value,
    }));
  };

  console.log(state);

  const handleSubmitForm = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(state.userEmail, state.pass)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setState((prev) => ({ ...prev, errFirebase: err.message }));
      });
  };

  return (
    <div className="register">
      <Welcome />
      <div className="register__form">
        <h3>Register</h3>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <label>
            <span className="register__required">
              {errors.userName?.message}
            </span>
            {/* <span className="register__required"> {state.errFirebase}</span> */}
            <span>
              <img src={user} className="register__span" alt="login user" />
            </span>
            <input
              ref={register({
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "You must have pass at least 6 characters",
                },
              })}
              name="userName"
              type="text"
              placeholder="enter your login"
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="register__required">{errors.pass?.message}</span>
            <span>
              <img src={password} className="register__span" alt="password" />
            </span>
            <input
              ref={register({
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "You must have pass at least 6 characters",
                },
              })}
              name="pass"
              type="password"
              placeholder="enter your password"
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="register__required">
              {errors.secondPass?.message}
            </span>
            <span>
              <img src={password} className="register__span" alt="password" />
            </span>
            <input
              ref={register({
                required: "This is required",
                validate: (name) =>
                  name === watch("pass") || "Password dont't match",
              })}
              name="secondPass"
              type="password"
              placeholder="repeat your password"
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="register__required">
              {errors.userEmail?.message}
            </span>
            <span>
              <img src={email} className="register__span" alt="email" />
            </span>
            <input
              ref={register({
                required: "This is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email",
                },
              })}
              name="userEmail"
              type="email"
              placeholder="enter your email"
              onChange={handleChange}
            />
          </label>
          <div className="register__checkbox">
            <input type="checkbox" name="isChecked" onChange={handleCheckbox} />
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
