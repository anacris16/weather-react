import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          Last updated: <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels Like: <strong>{Math.round(props.data.feels_like)}ºC</strong>{" "}
            </li>
            <li>
              Humidity:<strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{Math.round(props.data.wind)}km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
