import React, { useEffect, useState } from "react";
import fire from "../Firebase/firebaseConfig";
import Applications from "./Applications";

function User({ user }) {
  const [nameDay, setNameDay] = useState("");
  const [watch, setWatch] = useState("");

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

  useEffect(() => {
    setInterval(() => {
      const d = new Date().toLocaleTimeString();
      setWatch(d);
    }, 1000);
  }, []);

  useEffect(() => {
    const takeName = () => {
      fetch("https://api.abalin.net/today")
        .then((response) => {
          if (response) {
            return response;
          } else {
            const errMessage = `An error has occurred : ${response.status}`;
            throw Error(errMessage);
          }
        })
        .then((res) => res.json())
        .then((data) => {
          setNameDay(data.data.namedays.pl);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    takeName();
  }, []);

  const time = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  return (
    <div className="user">
      <div className="user__nav">
        <div className="user__date">
          <h2>Welcome {user}</h2>
          <p>Today is : {time} </p>
          <p>Name-day have - {nameDay}</p>
          <p>TimeZone : {watch}</p>
        </div>
        <div className="user__buttons">
          <button type="button" className="user__nav__button">
            Settings
          </button>
          <button
            type="button"
            onClick={handleLogOut}
            className="user__nav__button"
          >
            Logout
          </button>
        </div>
      </div>
      <Applications />
    </div>
  );
}

export default User;
