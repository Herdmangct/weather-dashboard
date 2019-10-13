// External Libraries
import axios from "axios";

// My Models
import WeatherObject from "../models/weather-object";

export const API_KEY = "c6962698473bb5316ec1ea448ce1e814";

export const getTodaysWeather = async city => {
  /**
   * Gets todays weather from the owm
   */

  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    .then(({ data }) => {
      return {
        todaysTemperature: data.main.temp.toFixed(0),
        todaysWeatherConditionID: data.weather[0].id
      };
    });
};

export const getFutureWeather = async city => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    )
    .then(({ data }) => {
      const { list } = data;

      // make an object with key: date value: WeatherObject
      // WeatherObject temperature: array of all temps for different hours of the day
      // WeatherObject WeatherCondition: id of the weather condition
      const averageTemps = {};
      list.forEach(period => {
        const date = new Date(period.dt * 1000).getDate();
        if (averageTemps.hasOwnProperty(date)) {
          averageTemps[date].temperature.push(period.main.temp);
        } else {
          averageTemps[date] = new WeatherObject(
            [period.main.temp],
            period.weather[0].id
          );
        }
      });

      // average the temperature arrays (each array entry is a 3hourly temperature prediction)
      for (const key of Object.keys(averageTemps)) {
        const temperatures = averageTemps[key].temperature;
        if (temperatures !== []) {
          const tempSum = temperatures.reduce((total, temp) => {
            return total + temp;
          });
          averageTemps[key].temperature = (
            tempSum / temperatures.length
          ).toFixed(0);
        }
      }

      return averageTemps;
    });
};

export const dayNumberToString = {
  days: {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday"
  },
  getDay: function(dayNumber) {
    return this.days[dayNumber];
  }
};

export const monthNumberToString = {
  months: {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  },
  getMonth: function(monthNumber) {
    return this.months[monthNumber];
  }
};

export const getTodaysDate = () => {
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday"
  };
  const today = new Date();
};
