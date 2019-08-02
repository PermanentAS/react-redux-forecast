import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withForecastService } from "./components/hoc/";
import { fetchWeatherThunk, updateHistory } from "./actions";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header";
import Input from "./components/input";
import TodayWeather from "./components/today-weather";
import WeekWeather from "./components/week-weather";
import History from "./components/history";
import ErrorBoundry from "./components/error-boundry";

class App extends Component {
  componentDidMount() {
    const { fetchWeatherThunk } = this.props;
    fetchWeatherThunk("Kiev");
  }

  render() {
    return (
      <div>
        <Header />
        <Input />
        <ErrorBoundry>
          <Switch>
            <Route path="/" component={TodayWeather} exact />
            <Route path="/week" component={WeekWeather} />
            <Route path="/" />
          </Switch>
        </ErrorBoundry>
        <History />
      </div>
    );
  }
}

const mapStateToProps = ({ currentCity }) => {
  return { currentCity };
};

const mapDispatchToProps = (dispatch, { forecastService }) => {
  return bindActionCreators(
    {
      fetchWeatherThunk: fetchWeatherThunk(forecastService),
      updateHistory: updateHistory
    },
    dispatch
  );
};

export default withForecastService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
