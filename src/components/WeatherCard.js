import React, { Component } from "react";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";

class WeatherCard extends Component {

  render() {
    const { name, temperature, temperatureUnit, icon, shortForecast, detailedForecast } = this.props.weatherData;

    return (
      <div className="WeatherCard">
        <p>{name}</p>
        <h1 className="WeatherCard-degrees">{temperature} {temperatureUnit}°</h1>
        <div className="WeatherCard-icon-container">
          <img src={`${icon}`} alt="icon"/>
          <h2 className="WeatherCard-city">
            {shortForecast}
          </h2>
          <p className="WeatherCardDetails">{detailedForecast}</p>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
