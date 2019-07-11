
const todayWeather = todayWeather => {
  return {
    type: "TODAY_WEATHER_FETCH",
    payload: todayWeather
  };
};

const weekWeather = weekWeather => {
  console.log("action: ", weekWeather);
  return {
    type: "WEEK_WEATHER_FETCH",
    payload: weekWeather
  };
};



export { todayWeather, weekWeather };
