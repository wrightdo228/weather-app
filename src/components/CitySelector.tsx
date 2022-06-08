import { Component } from "react";
import CityButton from './CityButton.tsx'

interface State {
    selectedCity: string,
}

const cities = {
    toronto: {
        latitude: 43.651070,
        longitude: -79.347015
    },
    montreal: {
        latitude: 45.508888,
        longitude: -73.561668,
    },
    vancouver: {
        latitude: 49.246292,
        longitude: -123.116226,
    },
}

class CitySelector extends Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = { selectedCity: 'toronto' };
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(city: string) {
        this.setState({
            selectedCity: city,
        })
    }

    render() {
        const { selectedCity } = this.state;

        return (
            <div id="city-selector">
                <CityButton
                    handleSelect={this.handleSelect}
                    selectedCity={selectedCity}
                    name="toronto"
                />
                <CityButton
                    handleSelect={this.handleSelect}
                    selectedCity={selectedCity}
                    name="hamilton"
                />
                <CityButton
                    handleSelect={this.handleSelect}
                    selectedCity={selectedCity}
                    name="vancouver"
                />
            </div>
        );
    }
}

export default CitySelector;