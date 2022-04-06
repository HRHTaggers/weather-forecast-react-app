import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    
    return (
      <div className="WeatherForecast text-center">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );

    } else {

    let apiKey = `72a4d6e3c49499c57e42e446cad198b6`;
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}