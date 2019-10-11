import React, { Component } from "react";

// My Components
import Header from "./Header/Header";
import InformationBar from "./InformationBar/InformationBar";

class WeatherWidget extends Component {
  render() {
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
    flexDirection: "column"
  }
};

export default WeatherWidget;
