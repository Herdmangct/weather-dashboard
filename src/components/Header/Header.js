import React, { Component } from "react";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Weather Icons
// import { WiDayCloudy } from "weather-icons-react";

class Header extends Component {
  render() {
    return (
      <div style={styles.headerContent}>
        <Row>
          <Col md={{ span: 2 }}>
            <i className="wi wi-owm-501" style={styles.weatherIcon}></i>
            {/* <i className="wi wi-day-sunny" style={{ fontSize: "125px" }}></i> */}
            {/* <div style={{ width: "160px", height: "125px" }}>
              <WeatherIcon
                name="owm"
                iconId="200"
                flip="horizontal"
                rotate="90"
                style={{ width: "100%", height: "100%" }}
              />
            </div> */}
            {/* <WiDayCloudy size={180} height={170} color="white" /> */}
          </Col>
          <Col md={{ span: 3 }} style={styles.degreesContainer}>
            <h1 style={styles.degrees}>15 &#176;</h1>
          </Col>
          <Col md={{ span: 6 }}></Col>
        </Row>
        <Row>
          <Col style={styles.date}>
            <h1>Wednesday, May 9</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

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
