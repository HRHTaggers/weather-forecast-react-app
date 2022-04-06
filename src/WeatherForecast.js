import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        
    let apiKey = `72a4d6e3c49499c57e42e446cad198b6`;
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    }

    if (loaded) {
    
    return (
      <div className="WeatherForecast text-center">
        <div className="row">
            {forecast.map((dailyForecast, index) => {
                if (index < 5) {
                    return (
                    <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                    </div>
                    );
                } else {
                    return (
                        null
                    )
                }
            })}
        </div>
      </div>
    );

    } else {
    load();
    
    return null;
    }
}