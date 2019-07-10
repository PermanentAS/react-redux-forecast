import React from "react";
import { connect } from "react-redux";

const TodayWeather = ({ todayWeather }) => {
  // console.log("todayWeather:  ", todayWeather);
  return (
    <div >
      <div className="content">
        <div className="header">{todayWeather.city}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Activity</h4>
        
      </div>
      <div className="extra content">
        <button className="ui button">Join Project</button>
      </div>
    </div>
  );
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
