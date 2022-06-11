import PropTypes from 'prop-types';

const CityButton = ({ name, selectedCity, handleSelect }) => {
    const isSelected = name === selectedCity;
    const className = `city-button${isSelected ? ' city-button-selected' : ''}`;

    return (
        <button
            type="button"
            onClick={() => handleSelect(name)}
            className={className}
        >
            {name.toUpperCase()}
        </button>
    );
};

CityButton.propTypes = {
    name: PropTypes.string.isRequired,
    selectedCity: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
};

export default CityButton;
