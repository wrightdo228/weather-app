import { Component } from "react";

interface Props {
    name: string,
    selectedCity: string,
    handleSelect: (name: string) => void,
};

class CityButton extends Component<Props> {
    render() {
        const { name, selectedCity, handleSelect } = this.props;
        const isSelected = name === selectedCity;
        const className = "city-button" + (isSelected ? " city-button-selected" : '');

        return (
            <button onClick={() => handleSelect(name)} className={className}>
                {name.toUpperCase()}
            </button>
        )
    }
}

export default CityButton;