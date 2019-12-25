import React from 'react';
import './WeatherPage.css';
import Weather from "../components/Weather";

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
                <Weather />
            </div>
        );
    }

}

export default WeatherPage;
