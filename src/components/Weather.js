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

    componentDidMount() {
        this.setState({
            day: this.props.day,
            data: this.props.data
        });
    }

    render() {

        return (
            <div>
                <h1 className="weather-style">weather {this.state.day}</h1>
            </div>
        );
    }

}

export default Weather;
