import { Component } from 'react';
import './App.less';
import CitySelector from './components/CitySelector.tsx';
import WeatherDisplay from './components/weather-display/WeatherDisplay.tsx';

class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <div id="main-content">
          <CitySelector />
          <WeatherDisplay />
        </div>
      </div>
    )
  }
}

export default App;
