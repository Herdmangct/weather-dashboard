import React, { Component } from "react";

// External Libraries
import queryString from "query-string";

// My Components
import Header from "./Header/Header";
import InformationBar from "./InformationBar/InformationBar";

// My Models
import WeatherObject from "../models/weather-object";

// API KEY
import { getTodaysWeather, getFutureWeather } from "../API/weatherAPI";

class WeatherWidget extends Component {
  constructor() {
    super();
    this.state = {
      city: "Sydney",
      today: {},
      forecast: {},
      currentDate: new Date()
    };
    this.fetchWeatherForecast = this.fetchWeatherForecast.bind(this);
  }

  componentDidMount() {
    const queryCity = queryString.parse(this.props.history.location.search)
      .city;
    const city = queryCity ? queryCity : this.state.city;
    this.props.history.replace("");
    this.props.history.push(`?city=${city}`);
    this.fetchWeatherForecast(city);
  }

  async fetchWeatherForecast(city = this.state.city) {
    // Update current date object
    this.setState({ currentDate: new Date() });

    // get weather for today
    getTodaysWeather(city)
      .then(({ todaysTemperature, todaysWeatherConditionID }) => {
        this.setState({
          today: new WeatherObject(todaysTemperature, todaysWeatherConditionID)
        });
      })
      .catch(error => {
        alert(
          `Error: Invalid city entered in the url \nPlease enter a valid city, \nredirecting to Sydney weather`
        );
        this.props.history.push(`?city=Sydney`);
        this.fetchWeatherForecast("Sydney");
      });

    // get weather forecast
    getFutureWeather(city).then(forecast => {
      this.setState({
        forecast: forecast
      });
    });
  }

  render() {
    return (
      <div style={styles.weatherWidgetContainer}>
        <Header
          currentTemperature={this.state.today.temperature}
          currentWeatherID={this.state.today.weatherConditions}
          currentDate={this.state.currentDate}
        />
        <InformationBar
          forecastInformation={this.state.forecast}
          currentDate={this.state.currentDate}
        />
      </div>
    );
  }
}

const styles = {
  weatherWidgetContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px",
    overflow: "hidden"
  }
};

export default WeatherWidget;
