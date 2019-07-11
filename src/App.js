import React, { Component } from "react";
import { connect } from "react-redux";
import { withForecastService } from "./components/hoc/";
import { todayWeather, weekWeather } from "./actions";

import "./App.css";

import Header from "./components/header";
import TodayWeather from "./components/today-weather";
import WeekWeather from "./components/week-weather";

class App extends Component {
  state = {
    todayWeather: null,
    weekWeather: null
  };

  componentWillMount() {
    this.updateWeather();
  }

  async updateWeather() {
    const { forecastService } = this.props;
    await forecastService.getWeather("Kiev").then(response => {
      this.setState({ todayWeather: response });
    });

    await forecastService.getWeekWeather("Kiev").then(response => {
      this.setState({ weekWeather: response });
    });

    this.props.todayWeather(this.state.todayWeather);
    this.props.weekWeather(this.state.weekWeather);
  }

  render() {
    return (
      <div>
        <Header />
        <TodayWeather />
        <WeekWeather />
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = {
  todayWeather,
  weekWeather
};

export default withForecastService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
