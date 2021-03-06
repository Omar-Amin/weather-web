import React from 'react';
import './DetailedWeather.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RechartGraph from "./RechartGraph"

class DetailedWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            day: "",
            temperature: 0,
            data: [{}],
            city: "",
            humidity: 0,
            wind: 0
        }

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        const { data, city } = this.props
        document.addEventListener('mousedown', this.handleClickOutside);

        this.setState({
            data: data.data,
            city: city,
            temperature: data.temperature,
            humidity: data.humidity,
            wind: data.wind,
            listTemp: data.listTemp
        })
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.switchToWeathers()
        }
    }

    render() {
        const { humidity, temperature, city, wind, listTemp } = this.state

        return (
            <Router>
                <div className="dw-container" ref={this.setWrapperRef}>
                    <div className="graph-style">
                        <RechartGraph data={listTemp} />
                    </div>
                    <div className="info-style">
                        <div className="city-style">{city}</div>
                        <div className="degree-container">
                            <div className="degree-style-detailed">{temperature}°</div>
                        </div>
                        <div className="humidity-detailed">Humidity</div>
                        <div className="humidity-percentage-detailed">{humidity}%</div>
                        <div className="wind-detailed">Wind</div>
                        <div className="wind-speed-detailed">{wind} m/s</div>
                    </div>

                    <div className="exit-style" >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <i className="material-icons" onClick={() => this.props.switchToWeathers()}>close</i>
                        </Link>
                    </div>
                </div>
            </Router>
        );
    }

}

export default DetailedWeather;
