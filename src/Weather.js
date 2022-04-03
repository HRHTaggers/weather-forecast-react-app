import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-md-9">
                        <input type="search" placeholder="Enter city..." className="Weather__form--input-search form-control" />
                    </div>
                    <div className="col-md-3">
                        <input type="submit" value="Search" className="Weather__form--input-submit btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>
                    Wednesday 07:00
                </li>
                <li>
                    Mostly cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-md-6">
                    <img
                    src="../public/02d.png"
                    alt="mostly cloudy"
                    />
                    6C
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Windspeed: 13 km/ph
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}