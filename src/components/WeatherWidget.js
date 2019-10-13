import React, { Component } from "react";

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
    this.state = { today: {}, forecast: {}, currentDate: new Date() };
    this.fetchWeatherForecast = this.fetchWeatherForecast.bind(this);
  }

  componentDidMount() {
    this.fetchWeatherForecast();
  }

  async fetchWeatherForecast(city = "sydney") {
    /**
     * Need two API calls 1) for current weather 2) for next 4 days weather
     * why?
     * because a request to the forecast api endpoint can return an empty array for todays weather if oyu are within
     * 3 hours of the end of the day.
     */

    // Update current date object
    this.setState({ currentDate: new Date() });

    // get weather for today
    getTodaysWeather(city).then(
      ({ todaysTemperature, todaysWeatherConditionID }) => {
        this.setState({
          today: new WeatherObject(todaysTemperature, todaysWeatherConditionID)
        });
      }
    );

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
