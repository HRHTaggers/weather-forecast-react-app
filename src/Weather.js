import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
      temperature: Math.round(response.data.main.temp),
      windspeed: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let units = "metric";
    let apiKey = "72a4d6e3c49499c57e42e446cad198b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city..."
            className="Weather__form--input"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="Search"
            className="Weather__form--button"
          />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
        />
      </div>
    );
  } else {
    search();
    return <h6>Loading..."</h6>;
  }
}
