import React from "react";
import { connect } from "react-redux";
import { updateWeatherFromHirtory } from "./../../actions";

import "./history.css";

const History = ({ forecastHistory, updateWeatherFromHirtory }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Forecast History</h2>
      </div>
      <div className="table table-striped">
          <div className=" d-flex">
            {forecastHistory.map(item => {
              const { id, city, weather, temp, icon } = item.todayWeather;

              return (
                <div
                  key={id}
                  className="forecast-card d-flex justify-content-between"
                  onClick={() => updateWeatherFromHirtory(id)}
                >
                  <div>
                    <h4>{city}</h4>
                    <p>{weather}</p>
                    <p>{temp}°C</p>
                  </div>
                  <div className="forecast-card-icon-block">
                    <img
                      className="forecast-card-icon"
                      src={`http://api.openweathermap.org/img/w/${icon}`}
                      alt="img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ forecastHistory }) => {
  return { forecastHistory };
};

const mapDispatchToProps = { updateWeatherFromHirtory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
