import React from "react";
import Welcome from "../Welcome/Welcome";
import email from "../../assets/email.png";

export default function Reset() {
  return (
    <div className="reset">
    <Welcome />
    <div className="reset__form">
      <h3>Reset</h3>
      <form>
        <label>
          <span>
            <img src={email} alt="email" className="reset__span" />
          </span>
          <input type="text" placeholder="enter your email" />
        </label>
        <button type="submit" className="reset__button">
          Reset Account
        </button>
      </form>
    </div>
  </div>
  );
}
