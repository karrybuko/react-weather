import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
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
              <div className="overview">
                <h1 id="city">{weatherData.city}</h1>
                <ul>
                  <li>
                    Last updated: <span id="date">{weatherData.date}</span>
                  </li>
                  <li id="description">{weatherData.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                      alt="Clear"
                      id="icon"
                      class="float-left"
                    />
                    <div className="float-left">
                      <strong id="temperature">
                        {Math.round(weatherData.temperature)}
                      </strong>
                      <span className="units"> °C</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span> m/h
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>

            <small>
              <a
                href="https://github.com/karrybuko/vanilla-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              by Karyna Sokolovska
            </small>
          </div>
        </div>
        <script src="src/app.js"></script>
      </div>
    );
  } else {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
