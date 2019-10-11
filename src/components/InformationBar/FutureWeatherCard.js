import React from "react";

// Bootstrap
import Col from "react-bootstrap/Col";

// Weather Icons
import { WiDayCloudy } from "weather-icons-react";

const WeatherForecastCard = props => {
  return (
    <Col>
      <div style={styles.cardInfo}>
        <WiDayCloudy size={120} color="#f58520" />
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
  day: {
    marginTop: "-30px",
    color: "#F6B27E"
  },
  degrees: {
    color: "#f58520"
  }
};

export default WeatherForecastCard;
