import React from 'react';
import './DetailedWeather.css';

class DetailedWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            day: "",
            degree: 0
        }

    }

    render() {

        return (
            <div className="dw-container" onClick={() => this.props.switchToWeathers()}>
            </div>
        );
    }

}

export default DetailedWeather;
