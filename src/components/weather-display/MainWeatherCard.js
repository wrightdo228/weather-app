import PropTypes from 'prop-types';
import WeatherIcon from './weather-icon/WeatherIcon';

const MainWeatherCard = ({ weather: { temperature, condition } }) => (
    <div id="main-weather-card">
        <p className="main-card-text">Today</p>
        <div className="main-card-content">
            <WeatherIcon large type={condition} />
            <div className="weather-info">
                <p className="main-card-temperature">
                    {Math.round(temperature)}
                    <span>&#176;</span>
                </p>
                <p className="main-card-text weather-condition">
                    {condition[0].toUpperCase()}
                    {condition.slice(1)}
                </p>
            </div>
        </div>
    </div>
);

MainWeatherCard.propTypes = {
    weather: PropTypes.shape({
        temperature: PropTypes.number,
        condition: PropTypes.string,
    }).isRequired,
};
export default MainWeatherCard;
