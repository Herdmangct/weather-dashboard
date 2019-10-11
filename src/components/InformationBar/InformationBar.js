import React, { Component } from "react";

// My Components
import FutureWeatherCard from "./FutureWeatherCard";
import Divider from "../General/Divider";

// Bootstrap
import Row from "react-bootstrap/Row";

class InformationBar extends Component {
  render() {
    return (
      <div style={styles.informationBar}>
        <Row style={styles.contentContainer}>
          {[...Array(4)].map((x, i) => (
            <React.Fragment key={i}>
              <FutureWeatherCard dayNumber={i + 1} />
              {i < 3 ? <Divider /> : ""}
            </React.Fragment>
          ))}
        </Row>
      </div>
    );
  }
}

const styles = {
  informationBar: {
    textAlign: "center",
    flex: 3,
    backgroundColor: "white"
  },
  contentContainer: {
    margin: 0,
    height: "100%"
  }
};

export default InformationBar;
