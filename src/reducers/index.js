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
  weekWeather: {
    city: null,
    list: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODAY_WEATHER_FETCH":
      return {
        ...state,
        todayWeather: action.payload
      };
      case "WEEK_WEATHER_FETCH":
      return {
        ...state,
        weekWeather: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
