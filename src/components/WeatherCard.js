import React, { Component } from "react";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";

class WeatherCard extends Component {

  render() {
    const { name, temperature, temperatureUnit, icon, shortForecast, detailedForecast } = this.props.weatherData;

    return (
      <div className="WeatherCard">
        <h3>{name}</h3>
        <h1 className="WeatherCard-degrees">{temperature} {temperatureUnit}°</h1>
        <div className="WeatherCard-icon-container">
          <img src={`${icon}`} alt="icon"/>
          <h4>
            {shortForecast}
          </h4>
          <p>
            {detailedForecast.substring(0, 70)}
          </p>
        </div>
      </div>
    );
  }
}


export default WeatherCard;
