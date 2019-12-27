import React from 'react';
import './Weather.css';
import days from "../data/days"

class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            day: 0,
            data: [{}],
            temperature: "empty",
            wind: "",
            humidity: ""
        }
    }

    componentDidMount() {
        const { wind, day, data, temperature, humidity } = this.props
        this.setState({
            day: day,
            data: data,
            temperature: temperature,
            wind: wind,
            humidity: humidity
        });
    }

    render() {
        const { wind, data, day, temperature, humidity } = this.state
        const firstData = data[0];
        console.log(firstData) //debugging
        return (
            <div className="weather-container">
                <h1 className="weather-style">{days[day]}</h1>
                <h2 className="degree-style">{temperature} °C</h2>
                <h3 className="humidity-percentage">{humidity}%</h3>
                <h3 className="humidity-style">Humidity:</h3>
                <h3 className="wind-style">Wind:</h3>
                <div className="wind-speed">{wind} km/h</div>
            </div>
        );
    }

}

export default Weather;
