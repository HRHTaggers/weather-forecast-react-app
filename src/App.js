import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <h1 className="App__title">Weather App</h1>
      <Weather defaultCity="London" />
      <footer className="footer">
        Coded by H R Tagliarini, open-sourced on
        <a
          href="https://github.com/HRHTaggers/weather-forecast-react-app"
          className="footer--GitHub-reference"
        >
          {" "}
          Github
        </a>{" "}
        and hosted on Netlify.
      </footer>
    </div>
  );
}
