import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li>
            Last updated:{" "}
            <span id="date">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li id="description">{props.data.description}</li>
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
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units"> °C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
