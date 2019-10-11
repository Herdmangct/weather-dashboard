import React, { Component } from "react";

// My Components
import WeatherWidget from "./components/WeatherWidget";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} style={styles.appContainer}>
            <WeatherWidget />
          </Col>
        </Row>
      </Container>
    );
  }
}

const styles = {
  appContainer: {
    height: "700px"
  }
};

export default App;
