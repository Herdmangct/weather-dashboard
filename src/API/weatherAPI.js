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

// await axios
//   .get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//   )
//   .then(({ data }) => {
//     return {
//       todaysTemperature: data.main.temp.toFixed(0),
//       todaysWeatherConditionID: data.weather[0].id
//     };
//   })
//   .then(({ todaysTemperature, todaysWeatherConditionID }) => {
//     console.log({
//       today: new WeatherObject(todaysTemperature, todaysWeatherConditionID)
//     });
//     // this.setState({weatherConditions: new WeatherObject(todaysTemperature, todaysWeatherConditions)} )
//   });
