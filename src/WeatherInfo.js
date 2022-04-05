import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="Weather__title">
        Current weather: <strong>{props.data.city}</strong>
      </h1>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix">
            <div className="WeatherInfo__Main-Reading">
              <WeatherIcon
                className="Weather__Icon"
                code={props.data.icon}
                alt={props.data.description}
              />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="Weather__primary-list">
            <li>
              <DateTime
                date={props.data.date}
                className="Weather__primary-list--date"
              />
            </li>
            <li className="Weather__primary-list--description text-capitalize">
              {props.data.description}
            </li>
            <li className="Weather__primary-list--humidity">
              Humidity: {props.data.humidity}
              <span className="Weather__primary-list--units">%</span>
            </li>
            <li className="Weather__primary-list--windspeed">
              Windspeed: {props.data.windspeed}
              <span className="Weather__primary-list--units">km/ph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
