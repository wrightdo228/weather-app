import PropTypes from 'prop-types';
import WeatherIcon from './weather-icon/WeatherIcon';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const getDayOfTheWeek = (index) => {
    const dateOffset = index + 1;
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + dateOffset);

    return days[futureDate.getDay()];
};

const SmallWeatherCard = ({ weather: { temperature, condition }, index }) => (
    <div className="small-weather-card">
        <p className="small-card-day">{getDayOfTheWeek(index)}</p>
        <WeatherIcon type={condition} />
        <p className="small-card-temperature">
            {Math.round(temperature)}
            <span>&#176;</span>
        </p>
    </div>
);

SmallWeatherCard.propTypes = {
    weather: PropTypes.shape({
        temperature: PropTypes.number,
        condition: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default SmallWeatherCard;
