import React, { useState } from "react";
import UserNav from "../UserNav";

function Weather() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const apiKeys = "59c097a1e93a3057195c1f8fb15a6b0f";

  const getInfo = async () => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKeys}&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
    setInputText("");
  };

  console.log(data);
  return (
    <>
      <UserNav />
      <div className="weahter">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} value={inputText} />
          <button type="submit">Search</button>
         // data.id etc.
        </form>
      </div>
    </>
  );
}

export default Weather;
