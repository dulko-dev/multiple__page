import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Welcome from "../Welcome/Welcome";
import user from "../../assets/login.png";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import fire from "../Firebase/firebaseConfig";

export default function Register() {
  const { register, handleSubmit, errors, watch } = useForm();
  const [state, setState] = useState({
    userName: "",
    userEmail: "",
    pass: "",
    secondPass: "",
    isChecked: false,
    errFirebase: "",
  });
  const history = useHistory();
  const userRef = useRef();
  const passRef = useRef();
  const secondPassRef = useRef();
  const emailRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const getToPass = (e) => {
    if (e.key === "Enter") {
      passRef.current.focus();
    }
  };
  const getToSecondPass = (e) => {
    if (e.key === "Enter") {
      secondPassRef.current.focus();
    }
  };
  const getToEmail = (e) => {
    if (e.key === "Enter") {
      emailRef.current.focus();
    }
  };
  const getToSubmit = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  };

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
        <form>
          <label>
            <span className="register__required">
              {errors.userName?.message}
            </span>
            {/* <span className="register__required"> {state.errFirebase}</span> */}
            <span>
              <img src={user} className="register__span" alt="login user" />
            </span>
            <input
              ref={(e) => {
                register(e, {
                  required: "This is required",
                  minLength: {
                    value: 6,
                    message: "You must have pass at least 6 characters",
                  },
                });
                userRef.current = e;
              }}
              name="userName"
              type="text"
              placeholder="enter your login"
              onChange={handleChange}
              onKeyDown={getToPass}
            />
          </label>
          <label>
            <span className="register__required">{errors.pass?.message}</span>
            <span>
              <img src={password} className="register__span" alt="password" />
            </span>
            <input
              ref={(e) => {
                register(e, {
                  required: "This is required",
                  minLength: {
                    value: 6,
                    message: "You must have pass at least 6 characters",
                  },
                });
                passRef.current = e;
              }}
              name="pass"
              type="password"
              placeholder="enter your password"
              onChange={handleChange}
              onKeyDown={getToSecondPass}
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
              ref={(e) => {
                register(e, {
                  required: "This is required",
                  validate: (name) =>
                    name === watch("pass") || "Password dont't match",
                });
                secondPassRef.current = e;
              }}
              name="secondPass"
              type="password"
              placeholder="repeat your password"
              onChange={handleChange}
              onKeyDown={getToEmail}
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
              ref={(e) => {
                register(e, {
                  required: "This is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                });
                emailRef.current = e;
              }}
              name="userEmail"
              type="email"
              placeholder="enter your email"
              onChange={handleChange}
              onKeyDown={getToSubmit}
            />
          </label>
          <div className="register__checkbox">
            <input type="checkbox" name="isChecked" onChange={handleCheckbox} />
            <span>Remember me!</span>
          </div>
          <button
            ref={submitRef}
            type="button"
            className="register__button"
            onClick={handleSubmit(handleSubmitForm)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
