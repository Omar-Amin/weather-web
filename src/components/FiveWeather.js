import React from 'react';
import './FiveWeather.css';
import Weather from "./Weather";

class FiveWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [1, 2, 3, 4, 5]
        }

    }

    render() {

        return (
            <div className="container">
                <div className="weather-table">
                    {this.state.data.map(item => (
                        <Weather day={item} />
                    ))}
                </div>
            </div>

        );
    }

}

export default FiveWeather;
