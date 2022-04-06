import React from "react";

export default function WeatherTemperature(props) {
    return (
      <div className="WeatherTemperature">
        <span className="WeatherTemperature__Main">
          {Math.round(props.celsius)}
        </span>
        <span className="WeatherTemperature__Unit">
          C
        </span>
      </div>
    );
}
