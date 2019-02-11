import React from 'react';

import SearchPanel from './components/SearchPanel';
import WeatherContainer from './components/WeatherContainer';
import Error from './components/Error';

const API_KEY = '17c95714008c4648066caaeccfd855e7';

class App extends React.Component {
  state = {
    weather: {},
    ready: true,
    error: null
  }

  getWeather = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    this.setState({ ready: false }, async () => {

      if (city) {
        try {
          const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
          const data = await apiCall.json();
          const weatherData = {
            date: data.dt,
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            main: data.weather[0].main,
            description: data.weather[0].description,
          };

          this.setState({
            weather: weatherData,
            ready: true,
            error: null
          });
        } catch (e) {
          this.setState({
            weather: {},
            ready: true,
            error: 'Enter correct city title!'
          })
        }
      } else {
        this.setState({ error: 'Enter city title!' });
      }
    })
  }

  renderWeatherContainer() {
    const { weather } = this.state;

    return Object.keys(weather).length > 0 && <WeatherContainer weatherData={weather} />
  }

  renderError() {
    return (
      <Error error={this.state.error} />
    )
  }

  render() {
    const { error } = this.state;

    return (
      <div className='container'>
        <SearchPanel getWeather={this.getWeather} />
        {error ? this.renderError() : this.renderWeatherContainer()}
      </div>
    );
  }
}

export default App;
