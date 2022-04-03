import React, {useState} from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            windspeed: Math.round(response.data.wind.speed),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            city: response.data.name,
            date: "Wednesday"
        });
    }
    
    if (weatherData.ready) {

    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-md-9">
                        <input 
                            type="search" 
                            placeholder="Enter city..." 
                            className="Weather__form--input-search form-control" 
                        />
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="submit" 
                            value="Search" 
                            className="Weather__form--input-submit btn btn-primary" 
                        />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-md-6">
                    <img
                    src="http://openweathermap.org/img/wn/10d${icon}@2x.png"
                    alt={weatherData.description}
                    />
                    {weatherData.temperature}C
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: {weatherData.humidity}
                        </li>
                        <li>
                            Windspeed: {weatherData.windspeed}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

} else {
    
    const units = "metric";
    const apiKey = "72a4d6e3c49499c57e42e446cad198b6";
    const city = (props.defaultCity);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(handleResponse);

    return
        <div>Loading...</div>
}
}