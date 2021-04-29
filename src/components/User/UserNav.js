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
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

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
          if (response.ok) {
            setIsError(false);
            return response;
          }
          setIsError(true);
          throw Error("something went wrong");
        })
        .then((res) => res.json())
        .then((data) => {
          setNameDay(data.data.namedays.pl);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch abort");
          }
          setError(err.message);
        });
    };

    takeName();

    return () => abortControl.abort();
  }, []);


  const backMenuHandle = () => {
    history.push("/");
  };

  const backToEvents = () => {
    history.push("/events");
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
            Name-day : <span>{isError ? error : nameDay}</span>
          </p>
          <p>
            TimeZone : <span>{date.toLocaleTimeString()}</span>
          </p>
        </div>
        <div className="userNav__buttons">
          <i
            className={`fas fa-chevron-left userNav__nav__button ${
              window.location.pathname === "/events/news" ||
              window.location.pathname === "/events/sport"
                ? "userNav__nav__button__arrow"
                : "userNav__nav__button__Notarrow"
            } `}
            style={{ display: `${homePage}` }}
            onClick={backToEvents}
          ></i>

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
