import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";
import { Link } from "react-router-dom";

import Spinner from "../spinner";

const WeekWeather = ({ weekWeather }) => {
  if (weekWeather.city !== undefined) {
    const { city, list } = weekWeather;
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{city}</h2>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Date</th>
                {list.map((item, index) => (
                  <td key={index} className="font-weight-bold">
                    {dateFns.format(
                      dateFns.addDays(new Date(), index),
                      "D MMMM YYYY"
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" />
                {list.map((item, index) => (
                  <td key={index} className="font-weight-bold">
                    <img
                      src={`http://api.openweathermap.org/img/w/${
                        item.weather[0].icon
                      }`}
                      alt="img"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Weather</th>
                {list.map((item, index) => (
                  <td key={index}>{item.weather[0].description}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Temperature</th>
                {list.map((item, index) => (
                  <td key={index}>{item.main.temp}°C</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Humidity</th>
                {list.map((item, index) => (
                  <td key={index}>{item.main.humidity}%</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Temperature max/min</th>
                {list.map((item, index) => (
                  <td key={index}>
                    {item.main.temp_max}°C/{item.main.temp_max}°C
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <Link to={process.env.PUBLIC_URL + "/"}>
            <span className="btn btn-primary">Go back</span>
          </Link>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = ({ weekWeather }) => {
  return {
    weekWeather
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekWeather);
