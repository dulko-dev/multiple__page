import React, { useEffect, useRef, useState } from "react";
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

  const emailRef = useRef();
  const passwordRef = useRef();
  const submitRef = useRef();
  const history = useHistory();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const getToPassword = (e) => {
    if (e.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  const getToSubmit = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  };

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
        <form autoComplete="off">
          <label>
            <span className="login__required">{errors.email?.message}</span>
            <span>
              <img src={email} alt="email" className="login__span" />
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
              type="email"
              placeholder="enter your email"
              onChange={handleSetState}
              onKeyPress={getToPassword}
              name="email"
            />
          </label>
          <label>
            <span className="login__required">{errors.pass?.message}</span>
            <span>
              <img src={password} alt="password" className="login__span" />
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
                passwordRef.current = e;
              }}
              type="password"
              name="pass"
              placeholder="enter your password"
              onChange={handleSetState}
              onKeyDown={getToSubmit}
            />
          </label>
          <button
            ref={submitRef}
            type="button"
            className="login__button"
            onClick={handleSubmit(handleLogin)}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
