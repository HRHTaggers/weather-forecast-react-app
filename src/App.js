import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="London" />
      <footer className="footer">
        Coded by H R Tagliarini, open-sourced on Github and hosted on Netlify.
      </footer>
    </div>
  );
}
