import React from 'react';
import './Weather.css';

class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            day: "",
            degree: 0
        }

    }

    render() {

        return (
            <div>
                <h1>weather1</h1>
            </div>
        );
    }

}

export default Weather;
