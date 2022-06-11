import PropTypes from 'prop-types';
import Atmosphere from './Atmosphere';
import Clear from './Clear';
import Clouds from './Clouds';
import Drizzle from './Drizzle';
import Rain from './Rain';
import Snow from './Snow';
import Thunderstorm from './Thunderstorm';

const WeatherIcon = ({ type, large }) => {
    const className = large ? 'large-weather-svg' : 'weather-svg';

    switch (type) {
        case 'thunderstorm':
            return <Thunderstorm className={className} />;
        case 'drizzle':
            return <Drizzle className={className} />;
        case 'rain':
            return <Rain className={className} />;
        case 'snow':
            return <Snow className={className} />;
        case 'atmosphere':
            return <Atmosphere className={className} />;
        case 'clear':
            return <Clear className={className} />;
        case 'clouds':
            return <Clouds className={className} />;
        default:
            return null;
    }
};

WeatherIcon.propTypes = {
    type: PropTypes.oneOf([
        'thunderstorm',
        'drizzle',
        'rain',
        'snow',
        'atmosphere',
        'clear',
        'clouds',
    ]).isRequired,
    large: PropTypes.bool,
};

export default WeatherIcon;
