import React, { Component } from "react";

// External Libraries
import { BrowserRouter as Router, Route } from "react-router-dom";

// My Components
import WeatherWidget from "./components/WeatherWidget";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }} style={styles.appContainer}>
              <Route path="/" component={WeatherWidget} />
              {/* <WeatherWidget /> */}
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const styles = {
  appContainer: {
    height: "700px"
  }
};

export default App;
