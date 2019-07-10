
const todayWeather = todayWeather => {
  return {
    type: "TODAY_WEATHER_FETCH",
    payload: todayWeather
  };
};

export { todayWeather };
