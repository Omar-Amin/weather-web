import React from 'react';
import './WeatherPage.css';
import DetailedWeather from '../components/DetailedWeather';

class WeatherPage extends React.Component {
    constructor() {
        super()

        this.state = {
            data: []
        }

    }

    render() {

        return (
            <div>
                <DetailedWeather />
            </div>
        );
    }

}

export default WeatherPage;
