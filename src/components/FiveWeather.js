import React from 'react';
import './FiveWeather.css';

class FiveWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            data: []
        }

    }

    render() {

        return (
            <div>
                <h1>weather1</h1>
                <h1>weather2</h1>
                <h1>weather3</h1>
                <h1>weather4</h1>
                <h1>weather5</h1>
            </div>
        );
    }

}

export default FiveWeather;
