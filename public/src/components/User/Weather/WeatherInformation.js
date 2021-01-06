import React from "react";

function WeatherInformation({ data }) {
  const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sunset * 1000).toLocaleTimeString();
  return (
    <div className="weatherInformation">
      <p>
        <span className="span__name">City name:</span>
        <span className="span__fetch">{data.cityName.toUpperCase()}</span>
      </p>
      <p>
        <span className="span__name">Country:</span>
        <span className="span__fetch">{data.country}</span>
      </p>
      <p>
        <span className="span__name">Weather:</span>
        <span className="span__fetch">{data.weather}</span>
      </p>
      <p>
        <span className="span__name">Temperature:</span>
        <span className="span__fetch">
          {data.temp}&#8451; [feels like {data.tempFeels}&#8451;]
        </span>
      </p>
      <p>
        <span className="span__name">Temperature max:</span>
        <span className="span__fetch">{data.temp_max}&#8451;</span>
      </p>
      <p>
        <span className="span__name">Temperature min:</span>
        <span className="span__fetch">{data.temp_min}&#8451;</span>
      </p>
      <p>
        <span className="span__name">Pressure:</span>
        <span className="span__fetch">{data.pressure}&#13169;</span>
      </p>
      <p>
        <span className="span__name">Humidity:</span>
        <span className="span__fetch">{data.humidity}%</span>
      </p>
      <p>
        <span className="span__name">Wind:</span>
        <span className="span__fetch">{data.wind}m/s</span>
      </p>
      <p>
        <span className="span__name">Sunrise: </span>
        <span className="span__fetch">{sunrise} CET</span>
      </p>
      <p>
        <span className="span__name">Sunset:</span>
        <span className="span__fetch"> {sunset} CET</span>
      </p>
    </div>
  );
}

export default WeatherInformation;
