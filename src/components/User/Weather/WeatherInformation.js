import React from "react";

function WeatherInformation({ data }) {
  const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sunset * 1000).toLocaleTimeString();
  return (
    <div className="weatherInformation">
      <p>city name: {data.cityName}</p>
      <p>country: {data.country} </p>
      <p>weather: {data.weather}</p>
      <p>
        temperature: {data.temp} &#8451; [feels like {data.tempFeels} &#8451;]{" "}
      </p>
      <p>temperature max: {data.temp_max}</p>
      <p>temperature min: {data.temp_min}</p>
      <p>pressure: {data.pressure} &#13169; </p>
      <p>humidity: {data.humidity}% </p>
      <p>wind: {data.wind}m/s</p>
      <p>sunrise: {sunrise}</p>
      <p>sunset: {sunset}</p>
    </div>
  );
}

export default WeatherInformation;
