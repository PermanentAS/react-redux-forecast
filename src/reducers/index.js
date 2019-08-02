const initialState = {
  currentCity: "",
  todayWeather: {},
  weekWeather: {},
  forecastHistory: [],
  hasError: false
};

const reducer = (state = initialState, action) => {
  const updateHistory = () => {
    let newHistoryItem = {
      city: state.currentCity,
      todayWeather: state.todayWeather,
      weekWeather: state.weekWeather
    };

    let newHistory = [];

    const cityId = state.todayWeather.id;
    const cityFounded = state.forecastHistory.find(
      city => city.todayWeather.id === cityId
    );

    if (state.forecastHistory.length >= 5 && cityFounded === undefined) {
      newHistory = [...state.forecastHistory.slice(1), newHistoryItem];
    } else if (state.forecastHistory.length <= 5 && cityFounded === undefined) {
      newHistory = [...state.forecastHistory, newHistoryItem];
    } else if (state.forecastHistory.length <= 5 && cityFounded !== undefined) {
      const idx = cityFounded.todayWeather.id;
      console.log(idx);
      newHistory = [
        ...state.forecastHistory.filter(city => city.todayWeather.id !== idx),
        newHistoryItem
      ];
    }

    return newHistory;
  };

  const updateWeatherFromHistory = id => {
    const cityFounded = state.forecastHistory.find(
      city => city.todayWeather.id === id
    );
    console.log(cityFounded);

    return {
      todayWeather: cityFounded.todayWeather,
      weekWeather: cityFounded.weekWeather,
      currentCity: cityFounded.city
    };
  };

  switch (action.type) {
    case "TODAY_WEATHER_FETCH_SUCCESS":
      return {
        ...state,
        todayWeather: action.payload
      };
    case "WEEK_WEATHER_FETCH_SUCCESS":
      return {
        ...state,
        weekWeather: action.payload
      };
    case "ERROR_CATCHED":
      return {
        ...state,
        hasError: action.payload
      };
    case "NEW_CITY_INPUT":
      return {
        ...state,
        currentCity: action.payload
      };
    case "FETCHING_STARTED":
      return {
        ...state,
        hasError: false
      };
    case "FETCHING_FINISHED":
      return {
        ...state
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        forecastHistory: updateHistory()
      };
    case "UPDATE_WEATHER_FROM_HISTORY":
      return {
        ...state,
        ...updateWeatherFromHistory(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
