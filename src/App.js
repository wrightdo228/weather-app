import { useEffect, useState } from 'react';
import './App.less';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/weather-display/WeatherDisplay';

const cities = {
    toronto: {
        latitude: 43.65107,
        longitude: -79.347015,
    },
    montreal: {
        latitude: 45.508888,
        longitude: -73.561668,
    },
    vancouver: {
        latitude: 49.246292,
        longitude: -123.116226,
    },
};

const reduceFetchData = (data) => [
    {
        temperature: data.current.temp,
        condition: data.current.weather[0].main.toLowerCase(),
    },
    ...data.daily.slice(1, 5).map((day) => ({
        temperature: day.temp.day,
        condition: day.weather[0].main.toLowerCase(),
    })),
];

const App = () => {
    const [loading, setLoading] = useState(true);
    const [selectedCity, setSelectedCity] = useState('toronto');
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const { longitude, latitude } = cities[selectedCity];

                setLoading(true);

                const promise = await fetch(
                    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=3fe3b9060778982efcf9872c7bea6440&exclude=minutely,hourly,alerts&units=metric`
                );
                const data = await promise.json();
                const reducedData = reduceFetchData(data);
                setWeatherData(reducedData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getWeatherData();
    }, [selectedCity]);

    return (
        <div className="main-container">
            <div id="main-content">
                {loading ? (
                    <div>loading...</div>
                ) : (
                    <>
                        <CitySelector
                            selectedCity={selectedCity}
                            setSelectedCity={setSelectedCity}
                            cities={Object.keys(cities)}
                        />
                        <WeatherDisplay data={weatherData} />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
