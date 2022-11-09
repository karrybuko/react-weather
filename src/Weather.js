import "./Weather.css";

export default function Weather() {
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
              <h1 id="city">New York</h1>
              <ul>
                <li>
                  Last updated: <span id="date">Wednesday 15:15</span>
                </li>
                <li id="description">Scattered clouds</li>
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
                    <strong id="temperature">22</strong>
                    <span className="units"> °C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">72</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">7</span> m/h
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
}
