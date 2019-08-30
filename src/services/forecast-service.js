import axios from "axios";

export default class ForecastService {
  _apiKey = "b4655c5e515d5be817ed70a0a7f55407";
  _apiBase = "//api.openweathermap.org/data/2.5/";

  getData = async url => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  getWeather = async city => {
    const res = await this.getData(
      `${this._apiBase}weather?q=${city}&APPID=${this._apiKey}&units=metric`
    );
    return this._transformWeather(res);
  };

  getWeekWeather = async city => {
    const res = await this.getData(
      `${this._apiBase}forecast?q=${city}&APPID=${this._apiKey}&units=metric`
    );
    return this._transformWeekWeather(res);
  };

  _transformWeather = res => {
    return {
      id: res.id,
      city: res.name,
      weather: res.weather[0].description,
      icon: res.weather[0].icon,
      temp: res.main.temp,
      humidity: res.main.humidity,
      temp_max: res.main.temp_max,
      temp_min: res.main.temp_min
    };
  };

  _transformWeekWeather = res => {
    return {
      city: res.city.name,
      list: [
        res.list[0],
        res.list[7],
        res.list[15],
        res.list[23],
        res.list[31],
        res.list[39]
      ]
    };
  };
}
