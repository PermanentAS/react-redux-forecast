const initialState = {
  todayWeather: {
    id: null ,
    city: null ,
    weather: null ,
    temp: null ,
    humidity: null ,
    temp_max: null ,
    temp_min: null 
  },
  todayWeekWeather: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODAY_WEATHER_FETCH":
      return {
        ...state,
        todayWeather: {...action.payload}
      };
    default:
      return state;
  }
};

export default reducer;
