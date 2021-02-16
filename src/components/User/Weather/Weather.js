import React, { useRef, useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import UserNav from "../UserNav";
import WeatherInformation from "./WeatherInformation";
import SearchIcon from "@material-ui/icons/Search";
import bg from "../../../assets/weather-bg.jpg";

const StyleField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#dadad9",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#dadad9",
    },
    "& .MuiInputBase-input": {
      color: "#dadad9",
    },
  },
})(TextField);

const StyleButton = withStyles({
  root: {
    backgroundColor: "#dadad9",
    display: "inline-block",
    padding: "10px 40px",
    marginLeft: "20px",
    "&:hover": {
      boxShadow: "0px 0px 10px 8px rgba(0,0,0,0.69)",
    },
    "& .MuiButton-label": {
      display: "flex",
      alignItems: "center",
    },
  },
})(Button);

function Weather() {
  const [dataCity, setDataCity] = useState([]);
  const [suggest, setSuggest] = useState("");
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

  const API_KEY = "e969589f0b166e518fa5a4c1c46fc1ca";
  const textRef = useRef(null);

  useEffect(() => {
    const fetchCities = () => {
      fetch(
        `https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json`
      )
        .then((response) => response.json())
        .then((data) => setDataCity(data));
    };
    fetchCities();
  }, []);

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
    let suggest = [];
    if (inputText.length > 1) {
      const regex = new RegExp(`^${inputText}`, "i");
      suggest = Object.values(dataCity).map((value) =>
        value.sort().filter((city) => regex.test(city))
      );
    }
    setSuggest(suggest.flat(1).slice(0, 15));
    setData((prev) => ({ ...prev, cityName: e.target.value }));
  };

  console.log(suggest);
  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
    setInputText("");
  };

  const updateInput = (value) => {
    setInputText(value);
    setData((prev) => ({ ...prev, cityName: value }));
    setSuggest([]);
  };

  console.log(suggest);
  return (
    <>
      <UserNav />
      <div className="weather">
        <img
          src={bg}
          atl="weather"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: "0",
            bottom: "0",
            zIndex: "-1",
          }}
        />
        <div className="weather__form">
          <form onSubmit={handleSubmit}>
            <StyleField
              inputRef={textRef}
              type="text"
              onChange={handleInput}
              value={inputText}
              id="custom-css-standard-input"
              label="City"
              autoComplete="off"
            />

            <StyleButton
              variant="contained"
              type="submit"
              disabled={inputText.length === 0}
              endIcon={<SearchIcon />}
            >
              Search
            </StyleButton>
          </form>
          {suggest.length === 0 ? null : (
            <ul className="weather__list">
              {suggest &&
                suggest
                  .filter(
                    (value, index, array) => array.indexOf(value) === index
                  )
                  .map((city) => (
                    <li
                      className="weather__autocomplete"
                      key={Math.random() * 1000}
                      onClick={() => updateInput(city)}
                    >
                      {city}
                    </li>
                  ))}
            </ul>
          )}
          {error && (
            <p className="weather__parNotExist">
              ups we can't find
              <span className="weather__spanNotExist">{data.cityName}</span>
            </p>
          )}
          {info && <WeatherInformation data={data} inputText={inputText} />}
        </div>
      </div>
    </>
  );
}

export default Weather;
