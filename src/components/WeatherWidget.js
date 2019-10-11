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
    flexDirection: "column",
    marginTop: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px",
    overflow: "hidden"
  }
};

export default WeatherWidget;
