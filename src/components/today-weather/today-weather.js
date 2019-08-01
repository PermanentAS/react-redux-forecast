import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";
import { Link } from "react-router-dom";

import Spinner from "../spinner";

const TodayWeather = ({ todayWeather }) => {
  if (todayWeather) {
    const {
      city,
      humidity,
      temp,
      temp_max,
      temp_min,
      weather,
      icon
    } = todayWeather;
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            {city}
            <span className="ml-3" style={{ fontSize: 25 }}>
              {dateFns.format(new Date(), "D MMMM YYYY")}
            </span>
          </h2>
          <table className="table table-striped" style={{ width: 500 }}>
            <tbody>
              <tr>
                <th scope="row" />
                <td>
                  <img
                    src={`http://api.openweathermap.org/img/w/${icon}`}
                    alt="img"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Weather</th>
                <td>{weather}</td>
              </tr>
              <tr>
                <th scope="row">Temperature</th>
                <td>{temp}°C</td>
              </tr>
              <tr>
                <th scope="row">Humidity</th>
                <td>{humidity}%</td>
              </tr>
              <tr>
                <th scope="row">Temperature max/min</th>
                <td>
                  {temp_max}/{temp_min}
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/week">
            <span className="btn btn-primary">Show week forecast</span>
          </Link>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = ({ todayWeather }) => {
  return {
    todayWeather
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayWeather);
