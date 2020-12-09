import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Firebase/Auth";
import { handleLogOut } from "../Logout/Logout";

function UserNav() {
  const { value } = useContext(AuthContext);
  const [user, setUser] = value;
  const nickName = useRef();
  const history = useHistory();

  const [nameDay, setNameDay] = useState("");
  const [date, setDate] = useState(new Date());
  const [isEdit, setIsEdit] = useState(false);

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
  });

  useEffect(() => {
    takeName();
  }, []);

  const takeName = async () => {
    await fetch("https://api.abalin.net/today")
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
        console.log(err);
      });
  };

  const handleChangeName = () => {
    setIsEdit(!isEdit);
  };

  const updateName = () => {
    setIsEdit(false);
    setUser(nickName.current.value);
  };

  const backMenuHandle = () => {
    history.push("/");
  };
  return (
    <div className="userNav">
      <div className="userNav__nav">
        <div className="userNav__date">
          <h2>
            Welcome
            {isEdit ? (
              <span className="userNav__editInput">
                <input type="text" defaultValue={user} ref={nickName} />
                <button onClick={handleChangeName}>X</button>
                <button onClick={updateName}>OK</button>
              </span>
            ) : (
              <span onClick={handleChangeName}>{user}</span>
            )}
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
        </div>
      </div>
    </div>
  );
}

export default UserNav;
