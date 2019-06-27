import React from 'react';
import weatherResponse from '../dummy_data/weather';
import keys from '../constants';

class Weather extends React.Component {
  constructor(params) {
    super(params);
    this.state = { loc: '', temp: '' };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      // this.fetchWeather(position.coords.latitude, position.coords.longitude);
    });
  }

  fetchWeather(lat, long) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=`;

    fetch(url + keys.weather)
      .then((res) => {
        if (res.status !== 200) {
          console.log(`There was a problem. Status Code: ${res.status}`);
          return;
        }
  
        return res.json();
      })
      .then((res) => {
        this.setState({ loc: res.name, temp: res.main.temp });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loc: weatherResponse.name, temp: weatherResponse.main.temp });
      });
  }

  render() {
    return (
      <div className="weather">
        <h1>Weather</h1>
        <div>
          <p>{this.state.loc}</p>
          <p>{this.state.temp}° F</p>
        </div>
      </div>
    );
  }
}

export default Weather;