import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <h1 className="Weather__title">Current weather: <strong>{props.data.city}</strong></h1>
            <ul className="Weather__primary-list">
                <li>
                    <DateTime date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-md-6">
                    <div className="float-left">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} />
                        <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="Weather__secondary-list">
                        <li>
                            Humidity: {props.data.humidity}<span className="Weather__secondary-list--units">%</span>
                        </li>
                        <li>
                            Windspeed: {props.data.windspeed}<span className="Weather__secondary-list--units">km/ph</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}