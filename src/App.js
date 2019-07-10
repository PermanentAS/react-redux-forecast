import React, { Component } from "react";
import { connect } from "react-redux";
import { withForecastService } from "./components/hoc/";
import { todayWeather } from "./actions";

import "./App.css";

import TodayWeather from "./components/today-weather";

class App extends Component {
  componentWillMount() {
    const { forecastService, todayWeather } = this.props;
    const data = forecastService.getWeather("Kiev");

    console.log("getWeather() from App component response:  ", data);
  }

  render() {
    // todayWeather(forecastService.getWeather("Kiev"))

    return (
      <div>
        <TodayWeather />
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = {
  todayWeather
};

export default withForecastService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
