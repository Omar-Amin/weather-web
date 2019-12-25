import React from 'react';
import './indexpage.css';
import FiveWeather from "../components/FiveWeather";

class IndexPage extends React.Component {
    constructor() {
        super()

        this.state = {
            data: []
        }

    }

    render() {

        return (
            <div>
                <FiveWeather />
            </div>
        );
    }

}

export default IndexPage;
