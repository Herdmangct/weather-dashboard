import React from "react";

// Bootstrap
import Col from "react-bootstrap/Col";

const WeatherCard = props => {
  const { day, temperature, weatherConditionsID } = props;
  return (
    <Col>
      <div style={styles.cardInfo}>
        <i
          className={`wi wi-owm-${weatherConditionsID}`}
          style={styles.weatherIcon}
        ></i>
        <h3 style={styles.day}>{day}</h3>
        <h4 style={styles.degrees}> {temperature}&#176;</h4>
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

export default WeatherCard;
