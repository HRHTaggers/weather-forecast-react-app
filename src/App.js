import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="App__Background">
        <h1 className="App__title">Weather App</h1>
        <Weather defaultCity="London" />
      </div>
      <footer className="footer">
        Coded by{" "}
        <a
          href="https://htcodes.netlify.app/"
          className="App__footer--link"
          target="blank"
          rel="noopener noreferrer"
        >
          H R Tagliarini
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/HRHTaggers/weather-forecast-react-app"
          className="App__footer--link"
          target="blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://app.netlify.com/sites/leafy-dolphin-1ad5c4/overview "
          className="App__footer--link"
          target="blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
        <div className="App__footer--logo mt-2">
          <a
            href="https://htcodes.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src="../img/helen-tagliarini-logo.png"
              alt="Helen Tagliarini logo"
              width={30}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
