import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast__Day">{day()}</div>
      <WeatherIcon
        className="WeatherForecast__Icon"
        code={props.data.weather[0].icon}
        size={36}
      />
      <div className="WeatherForecast__Temperature">
        <span className="WeatherForecast__Temperature-Max">
          {maxTemperature()}
        </span>
        {" "}|{" "}
        <span className="Weather-Forecast__Temperature-Min text-muted">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
