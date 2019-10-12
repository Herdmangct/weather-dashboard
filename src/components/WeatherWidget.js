import React, { Component } from "react";

// External Libraries
import _ from "underscore";

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
    this.state = { today: {}, forecast: {} };
    this.fetchWeatherForecast = this.fetchWeatherForecast.bind(this);
  }

  componentDidMount() {
    this.fetchWeatherForecast();
  }

  async fetchWeatherForecast(city = "Sydney") {
    /**
     * Need two API calls 1) for current weather 2) for next 4 days weather
     * why?
     * because a request to the forecast api endpoint can return an empty array for todays weather if oyu are within
     * 3 hours of the end of the day.
     */

    // get weather for today
    getTodaysWeather("sydney").then(
      ({ todaysTemperature, todaysWeatherConditionID }) => {
        console.log("Todays Weather:", {
          today: new WeatherObject(todaysTemperature, todaysWeatherConditionID)
        });
        this.setState({
          today: new WeatherObject(todaysTemperature, todaysWeatherConditionID)
        });
      }
    );

    // get weather forecast
    getFutureWeather("sydney").then(forecast => {
      console.log("Forecast:", forecast);
      this.setState({
        forecast: forecast
      });
    });
  }

  render() {
    // const weatherIcons = { "01d": Wi["WiDaySunny"] };
    // console.log(weatherIcons);
    return (
      <div style={styles.weatherWidgetContainer}>
        <Header />
        <InformationBar />
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

// error => {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         alert("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.");
//         break;
//       default:
//         alert("An unknown error occurred.");
//         break;
//     }
