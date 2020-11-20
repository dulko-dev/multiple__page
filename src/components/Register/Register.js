import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import user from "../../assets/login.png";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import fire from "../Firebase/firebaseConfig";

export default function Register(props) {
  const [state, setState] = useState({
    userName: "",
    email: "",
    pass: "",
    secondPass: "",
    isChecked: false,
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = () => {
    setState((prevState) => ({
      ...prevState,
      isChecked: !state.isChecked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(state.email, state.pass)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register">
      <Welcome />
      <div className="register__form">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>
              <img src={user} className="register__span" alt="login user" />
            </span>
            <input
              name="userName"
              type="text"
              placeholder="enter your login"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>
              <img src={password} className="register__span" alt="password" />
            </span>
            <input
              name="pass"
              type="password"
              placeholder="enter your password"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>
              <img src={password} className="register__span" alt="password" />
            </span>
            <input
              name="secondPass"
              type="password"
              placeholder="repeat your password"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>
              <img src={email} className="register__span" alt="email" />
            </span>
            <input
              name="email"
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
