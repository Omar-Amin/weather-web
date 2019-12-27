import React from 'react';
import './FiveWeather.css';
import Weather from "./Weather";
import token from "../data/token";

class FiveWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [1, 2, 3, 4, 5],
            items: {}
        }

    }

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Copenhagen,DK&appid=" + token)
            .then(response => { return response.json() })
            .then(data => this.setState({ items: data }));
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="container">
                <div className="weather-table">
                    {this.state.data.map(item => (
                        <Weather key={item} day={item} />
                    ))}
                </div>
            </div>

        );
    }

}

export default FiveWeather;
