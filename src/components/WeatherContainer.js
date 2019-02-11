import React from 'react';
import Rain from '../static/rain-d.png';
import Thunderstorm from '../static/drizzle.png';
import Drizzle from '../static/drizzle.png';
import Snow from '../static/snow.png';
import Clear from '../static/clear-d.png';
import Clouds from '../static/clouds-d.png';
import Default from '../static/mist.png';

class WeatherContainer extends React.Component {

    render() {
        const imageMain = {
            Rain,
            Thunderstorm,
            Drizzle,
            Snow,
            Clear,
            Clouds,
            Default
        }
        const getFullTime = (time) => {
            let myDate = new Date(time * 1000);
            return myDate.toDateString()
        }

        const getTime = (time) => {
            let myTime = new Date(time * 1000);
            return myTime.toTimeString().split(' ')[0];
        }

        if (!imageMain[this.props.weatherData.main]) {
            this.props.weatherData.main = 'Default';
        }

        return (
            <div className='weather-container' >
                <div className='date-container'>
                    <div>{getFullTime(this.props.weatherData.date)}</div>
                </div>
                <div className='weather-conditions'>
                    <div>
                        {this.props.weatherData.error && <div>{this.props.weatherData.error}</div>}
                        <div className='weather-city'>{this.props.weatherData.city},{this.props.weatherData.country}</div>
                        <div className='weather-temperature'>{Math.round(this.props.weatherData.temperature)}°</div>
                        <div>Wind: {this.props.weatherData.wind}km/h</div>
                        <div>Pressure: {this.props.weatherData.pressure}MB</div>
                        <div>Humodity: {this.props.weatherData.humidity}%</div>
                    </div>
                    <div>
                        <div className='weather-img'>
                            <img src={imageMain[this.props.weatherData.main]} alt={this.props.weatherData.main} />
                        </div>
                        <div>Sunrise: {getTime(this.props.weatherData.sunrise)}</div>
                        <div>Sunset: {getTime(this.props.weatherData.sunset)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherContainer;