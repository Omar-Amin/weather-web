import React from 'react';
import './Weather.css';
import days from "../data/days"

class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            day: 0,
            data: [{}],
            temperature: "empty"
        }
    }

    componentDidMount() {
        const { day, data, temperature } = this.props
        this.setState({
            day: day,
            data: data,
            temperature: temperature
        });
    }

    render() {
        const { data, day, temperature } = this.state
        console.log(data) //debugging
        return (
            <div>
                <h1 className="weather-style">{days[day]}</h1>
                <h2>{temperature}</h2>
            </div>
        );
    }

}

export default Weather;
