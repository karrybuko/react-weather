import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />

              <small>
                <a
                  href="https://github.com/wecodeschool/react-weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-source code{" "}
                </a>
                by Karyna Sokolovska
              </small>
            </div>
          </div>
          <script src="src/app.js"></script>
        </div>
      </div>
    );
  } else {
    search();
  }
}
