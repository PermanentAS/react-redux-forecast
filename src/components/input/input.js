import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchNewCity, fetchTodayWeatherThunk } from "./../../actions";
import { withForecastService } from "../hoc";

class Input extends Component {
  state = {
    inputValue: ""
  };

  onChangeHandler = e => {
    this.setState({ inputValue: e.target.value });
  };

  onClickButtonHandler = () => {
    const { fetchNewCity, fetchTodayWeatherThunk } = this.props;
    const { inputValue } = this.state;

    if (inputValue !== "") {
      fetchNewCity(inputValue);
      fetchTodayWeatherThunk(inputValue);
      // fetchWeekWeatherThunk(inputValue);
    }
  };

  render() {
    return (
      <div className="input-group pl-3 pt-3 pb-3" style={{ width: 500 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Input city here..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={this.onChangeHandler}
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon1"
            onClick={this.onClickButtonHandler}
          >
            Search city forecast
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentCity }) => {
  return {
    currentCity
  };
};

const mapDispatchToProps = (dispatch, { forecastService }) => {
  return bindActionCreators(
    {
      fetchTodayWeatherThunk: fetchTodayWeatherThunk(forecastService),
      fetchNewCity: fetchNewCity
    },
    dispatch
  );
};

export default withForecastService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Input)
);
