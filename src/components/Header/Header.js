import React from "react";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

// My API
import { dayNumberToString, monthNumberToString } from "../../API/weatherAPI";

const Header = props => {
  const { currentTemperature, currentWeatherID, currentDate } = props;

  if (currentWeatherID && currentWeatherID) {
    return (
      <div style={styles.headerContent}>
        <Row>
          <Col md={{ span: 2 }}>
            <i
              className={`wi wi-owm-${currentWeatherID}`}
              style={styles.weatherIcon}
            ></i>
          </Col>
          <Col md={{ span: 3 }} style={styles.degreesContainer}>
            <h1 style={styles.degrees}>{currentTemperature}&#176;</h1>
          </Col>
          <Col md={{ span: 6 }}></Col>
        </Row>
        <Row>
          <Col style={styles.date}>
            <h1>
              {dayNumberToString.getDay(currentDate.getDay())},{" "}
              {monthNumberToString.getMonth(currentDate.getMonth())}{" "}
              {currentDate.getDate()}
            </h1>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div
        style={{
          ...styles.headerContent,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Spinner animation="border" role="status" color="white">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
};

const styles = {
  headerContent: {
    flex: 6,
    color: "white",
    backgroundImage: `url(https://i.pinimg.com/originals/07/c3/4e/07c34e6089463bae34075960643cb9e9.jpg)`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    paddingTop: "40px",
    paddingLeft: "40px"
  },
  weatherIcon: {
    fontSize: "105px"
  },
  degreesContainer: {
    display: "flex",
    justifyContent: "flex-start"
  },
  degrees: {
    fontSize: "90px"
  },
  date: {
    marginTop: "15px"
  }
};

export default Header;
