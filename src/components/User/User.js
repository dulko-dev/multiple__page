import React from "react";
import fire from "../Firebase/firebaseConfig";

function User({ user }) {
  const handleLogOut = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("wylogowano");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="user">
      <div className="user__nav">
        <h2>Welcome {user}</h2>
        <button
          type="button"
          onClick={handleLogOut}
          className="user__nav__button"
        >
          Wyloguj
        </button>
      </div>
    </div>
  );
}

export default User;
