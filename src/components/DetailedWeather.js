import React from 'react';
import './DetailedWeather.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class DetailedWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            day: "",
            degree: 0,
            data: [{}]
        }

    }

    componentWillMount() {
        this.setState({
            data: this.props.data
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <Router>
                <div className="dw-container">
                    <div className="graph-style">
                        graph
                    </div>
                    <div className="info-style">
                        info
                    </div>
                    <div className="exit-style" >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <i class="material-icons" onClick={() => this.props.switchToWeathers()}>close</i>
                        </Link>
                    </div>
                </div>
            </Router>
        );
    }

}

export default DetailedWeather;
