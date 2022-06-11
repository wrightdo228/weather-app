import PropTypes from 'prop-types';
import CityButton from './CityButton';

const CitySelector = ({ cities, setSelectedCity, selectedCity }) => (
    <div id="city-selector">
        {cities.map((city) => (
            <CityButton
                handleSelect={setSelectedCity}
                selectedCity={selectedCity}
                name={city}
                key={city}
            />
        ))}
    </div>
);

CitySelector.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedCity: PropTypes.func.isRequired,
    selectedCity: PropTypes.oneOf(['toronto', 'vancouver', 'montreal'])
        .isRequired,
};

export default CitySelector;
