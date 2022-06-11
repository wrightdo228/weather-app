import React from 'react';
import PropTypes from 'prop-types';
import MainWeatherCard from './MainWeatherCard';
import SmallWeatherCard from './SmallWeatherCard';

const WeatherDisplay = ({ data }) => (
    <div id="weather-display">
        <MainWeatherCard weather={data[0]} />
        <div id="small-card-container">
            {data.slice(1, 5).map((weather, index) => (
                <SmallWeatherCard index={index} weather={weather} key={index} />
            ))}
        </div>
    </div>
);

WeatherDisplay.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            temperature: PropTypes.number,
            condition: PropTypes.string,
        })
    ).isRequired,
};

export default WeatherDisplay;
