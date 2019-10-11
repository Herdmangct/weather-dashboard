import React, { Component } from "react";

class InformationBar extends Component {
  render() {
    return (
      <div style={styles.app}>
        <h1>Information Bar Coming Soon</h1>
      </div>
    );
  }
}

const styles = {
  app: {
    textAlign: "center",
    flex: 3
  }
};

export default InformationBar;
