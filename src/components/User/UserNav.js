import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/Auth";
import { handleLogOut } from "../Logout/Logout";

function UserNav() {
  const [nameDay, setNameDay] = useState("");
  const [watch, setWatch] = useState("");

  const user = useContext(AuthContext);

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
    <div className="userNav">
      <div className="userNav__nav">
        <div className="userNav__date">
          <h2>
            Welcome <span>{user}</span>
          </h2>
          <p>
            Today is : <span> {time}</span>
          </p>
          <p>
            Name-day : <span>{nameDay} </span>
          </p>
          <p>
            TimeZone : <span> {watch}</span>
          </p>
        </div>
        <div className="userNav__buttons">
          <button type="button" className="userNav__nav__button">
            Settings
          </button>
          <button
            type="button"
            onClick={handleLogOut}
            className="userNav__nav__button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
