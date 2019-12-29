import React from 'react';
import './Weather.css';
import days from "../data/days"
import { BrowserRouter as Router, Link } from 'react-router-dom';


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
        })
    }

    render() {
        const { wind, data, day, temperature, humidity } = this.state
        const firstData = data[0]
        console.log(firstData) //debugging
        return (
            <Router>
                <div className="weather-container">
                    <Link to={"/" + days[day]} style={{ textDecoration: 'none' }}>
                        <div className="card-style" onClick={() => this.props.switchToDetailed(data)}>
                            <div className="weather-style">{days[day]}</div>
                            <div className="degree-style">{temperature} °C</div>
                            <div className="humidity-style">Humidity:</div>
                            <div className="humidity-percentage">{humidity}%</div>
                            <div className="wind-style">Wind:</div>
                            <div className="wind-speed">{wind} km/h</div>
                        </div>
                    </Link>
                </div>
            </Router >

        )
    }

}

export default Weather;
