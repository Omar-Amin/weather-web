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
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="exit-style" onClick={() => this.props.switchToWeathers()}>
                            Exit
                        </div>
                    </Link>
                </div>
            </Router>
        );
    }

}

export default DetailedWeather;
