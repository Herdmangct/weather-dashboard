import React from "react";

import Row from "react-bootstrap/Row";

// My Components
import WeatherCard from "./WeatherCard";
import Divider from "../General/Divider";

// My API
import { dateToDayString } from "../../API/weatherAPI";

// Bootstrap

const InformationBar = props => {
  const { forecastInformation, currentDate } = props;
  const forecastDates = Object.keys(forecastInformation).filter(date => {
    return date > currentDate.getDate() && date <= currentDate.getDate() + 4;
  });

  return (
    <div style={styles.informationBar}>
      <Row style={styles.contentContainer}>
        {forecastDates.map((date, i) => (
          <React.Fragment key={i}>
            <WeatherCard
              day={i === 0 ? "Tomorrow" : dateToDayString(currentDate, date)}
              temperature={forecastInformation[date].temperature}
              weatherConditionsID={forecastInformation[date].weatherConditions}
            />
            {i < 3 ? <Divider /> : ""}
          </React.Fragment>
        ))}
        {/* {[...Array(4)].map((x, i) => (
          <React.Fragment key={i}>
            <WeatherCard dayNumber={i + 1} />
            {i < 3 ? <Divider /> : ""}
          </React.Fragment>
        ))} */}
      </Row>
    </div>
  );
};

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
