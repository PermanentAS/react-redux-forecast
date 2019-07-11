import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";

const WeekWeather = ({ weekWeather: { city, list } }) => {
  if (list) {

    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{city}</h2>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row" >Date</th>
                {list.map((item, index) => (
                  <td key={index} className="font-weight-bold">{dateFns.format(dateFns.addDays(new Date(), index), "D MMMM YYYY")}</td>
                ))}
              </tr>
              <tr>
                <th scope="row" ></th>
                {list.map((item, index) => (
                  <td key={index} className="font-weight-bold">
                  <img src={`http://api.openweathermap.org/img/w/${item.weather[0].icon}`} />
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

          <span className="btn btn-primary">Go back</span>
        </div>
      </div>
    );
  } else {
    return <div>Fetching data</div>;
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
