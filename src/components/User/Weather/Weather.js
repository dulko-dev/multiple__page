import React, { useRef, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import UserNav from "../UserNav";
import WeatherInformation from "./WeatherInformation";

const style = makeStyles({
  TextField: {
    borderColor: "white",
  },
});

function Weather() {
  const [error, setError] = useState(false);
  const [info, setInfo] = useState(false);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({
    cityName: "",
    weather: "",
    temp: "",
    tempFeels: "",
    temp_max: "",
    temp_min: "",
    pressure: "",
    humidity: "",
    wind: "",
    sunrise: "",
    sunset: "",
    country: "",
  });
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const classess = style();
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  useEffect(() => {
    setError(false);
    setInfo(false);
  }, [inputText]);

  const getInfo = async () => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          setError(false);
          setInfo(true);
          return response.json();
        }
        throw Error("błąd");
      })
      .then((response) => {
        setData((prev) => ({
          ...prev,
          weather: response.weather.map((e) => e.description),
          temp: response.main.temp,
          tempFeels: response.main.feels_like,
          temp_max: response.main.temp_max,
          temp_min: response.main.temp_min,
          pressure: response.main.pressure,
          humidity: response.main.humidity,
          wind: response.wind.speed,
          sunrise: response.sys.sunrise,
          sunset: response.sys.sunset,
          country: response.sys.country,
        }));
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
    setData((prev) => ({ ...prev, cityName: e.target.value }));
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
      <div className="weather">
        <div className="weather__form">
          <form onSubmit={handleSubmit}>
            <TextField
              inputRef={textRef}
              type="text"
              onChange={handleInput}
              value={inputText}
              id="outlined-basic"
              label="City"
              variant="outlined"
              className={classess.TextField}
            />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              disabled={inputText.length === 0}
            >
              Search
            </Button>
          </form>
          {error && (
            <p>
              City
              <span style={{ fontSize: "2em", textDecoration: "underline" }}>
                {data.cityName}
              </span>
              doesn't matched to result
            </p>
          )}
          {info && <WeatherInformation data={data} inputText={inputText} />}
        </div>
      </div>
    </>
  );
}

export default Weather;
