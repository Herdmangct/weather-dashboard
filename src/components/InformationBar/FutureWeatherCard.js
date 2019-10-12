import React from "react";

// Bootstrap
import Col from "react-bootstrap/Col";

const WeatherForecastCard = props => {
  return (
    <Col>
      <div style={styles.cardInfo}>
        <i className="wi wi-owm-501" style={styles.weatherIcon}></i>
        <h3 style={styles.day}>Tomorrow</h3>
        <h4 style={styles.degrees}> 17&#176;</h4>
      </div>
    </Col>
  );
};

const styles = {
  cardInfo: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px"
  },
  weatherIcon: {
    fontSize: "90px",
    color: "#f58520"
  },
  day: {
    marginTop: "10px",
    color: "#F6B27E"
  },
  degrees: {
    color: "#f58520"
  }
};

export default WeatherForecastCard;
