import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Firebase/Auth";
import { handleLogOut } from "../Logout/Logout";
import Support from "../Utility/Support/Support";

function UserNav({ homePage }) {
  const { value } = useContext(AuthContext);
  const [user] = value;

  const history = useHistory();

  const [nameDay, setNameDay] = useState("");
  const [date, setDate] = useState(new Date());

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  useEffect(() => {
    let intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  useEffect(() => {
    const abortControl = new AbortController();
    const takeName = async () => {
      await fetch("https://api.abalin.net/today", {
        signal: abortControl.signal,
      })
        .then((response) => {
          if (response) {
            return response;
          }
        })
        .then((res) => res.json())
        .then((data) => {
          setNameDay(data.data.namedays.pl);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch abort");
          } else {
            console.log(err);
          }
        });
    };

    takeName();

    return () => abortControl.abort();
  }, []);

  const backMenuHandle = () => {
    history.push("/");
  };

  return (
    <div className="userNav">
      <div className="userNav__nav">
        <div className="userNav__date">
          <h2>
            Welcome
            <span>{user}</span>
          </h2>
          <p>
            Today is : <span>{today}</span>
          </p>
          <p>
            Name-day : <span>{nameDay}</span>
          </p>
          <p>
            TimeZone : <span>{date.toLocaleTimeString()}</span>
          </p>
        </div>
        <div className="userNav__buttons">
          <button
            style={{ display: `${homePage}` }}
            type="button"
            onClick={backMenuHandle}
            className="userNav__nav__button"
          >
            Back to Dashboard
          </button>

          <button
            type="button"
            onClick={handleLogOut}
            className="userNav__nav__button"
          >
            Logout
          </button>
          <Support />
        </div>
      </div>
    </div>
  );
}

export default UserNav;
