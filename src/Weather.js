import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
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
      <h1>Amsterdam</h1>
      <ul>
        <li>Last updated: Tuesday 18:00</li>
        <li>Rain showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
            alt="shower-rain"
          />
          <span className="temperature">12</span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:80%</li>
            <li>Wind:10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}