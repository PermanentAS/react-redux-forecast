const fetchTodayWeather = todayWeather => {
  return {
    type: "TODAY_WEATHER_FETCH_SUCCESS",
    payload: todayWeather
  };
};

const fetchWeekWeather = weekWeather => {
  return {
    type: "WEEK_WEATHER_FETCH_SUCCESS",
    payload: weekWeather
  };
};

const fetchNewCity = city => {
  return {
    type: "NEW_CITY_INPUT",
    payload: city
  };
};

const fetchingStarted = () => {
  return {
    type: "FETCHING_STARTED",
  };
};

const fetchingFinished = () => {
  return {
    type: "FETCHING_FINISHED",
  };
};

const updateHistory = () => {
  return {
    type: "UPDATE_HISTORY"
  };
};

const updateWeatherFromHirtory = (id) => {
  return {
    type: "UPDATE_WEATHER_FROM_HISTORY",
    payload: id
  };
}

const fetchWeatherThunk = forecastService => city => dispatch => {
  dispatch(fetchingStarted());
  forecastService
    .getWeather(city)
    .then(data => {
      dispatch(fetchTodayWeather(data));
    })
    .then(() => {
      forecastService
        .getWeekWeather(city)
        .then(data => {
          dispatch(fetchWeekWeather(data));
          dispatch(fetchingFinished());
        })
        .then(() => {
          dispatch(updateHistory());
        });
    }).catch ((err) => dispatch(errorCatched()));
};

const errorCatched = () => {
  return{
    type: 'ERROR_CATCHED',
    payload: true
  }
}

export {
  fetchNewCity,
  fetchWeatherThunk,
  updateHistory,
  updateWeatherFromHirtory,
  errorCatched
};
