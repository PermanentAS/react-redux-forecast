import axios from "axios";

export default class ForecastService {
  _apiKey = "b31b19c0585fd0eb8c5011d1c180c7d4";
  _apiBase = "http://api.openweathermap.org/data/2.5/";
  _imgBase = "http://api.openweathermap.org/img/w/";

  getData = async url => {
    try {
      const response = await axios.get(url);
      return response.data
    } catch (error) {
      return error
    }
  };

  getWeather = async city => {
    const res = await this.getData(
      `${this._apiBase}weather?q=${city}&APPID=${this._apiKey}&units=metric`
    );
      console.log("getWeather() from service response: ",this._transformWeather(res));
    return this._transformWeather(res);
  };

  getWeekWeather = async city => {
    const res = await axios
      .get(
        `${this._apiBase}forecast?q=${city}&APPID=${this._apiKey}&units=metric`
      )
      .then(res => res.data)
      .catch(err => err);
    return this._transformWeekWeather(res);
  };

  _transformWeather = (res) => {
    return {
      id: res.id,
      city: res.name,
      weather: res.weather[0].description,
      temp: res.main.temp,
      humidity: res.main.humidity,
      temp_max: res.main.temp_max,
      temp_min: res.main.temp_min
    };
  };

  _transformWeekWeather = res => {
    return {
      city: res.city.name,
      list: [res.list[0], res.list[1], res.list[2], res.list[3], res.list[4], res.list[5], res.list[6]]
    };
  };
}
