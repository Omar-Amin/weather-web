import React from "react";
import "./FiveWeather.css";
import Weather from "./Weather";
import token from "../data/token";
import DetailedWeather from "./DetailedWeather";

class FiveWeather extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [{ data: [], day: 0, temperature: 0 }],
            lastDay: { data: [], day: 0, temperature: 0 }, //maybe used later.
            finishSearch: false,
            dwOpened: false
        };

        this.insertData = this.insertData.bind(this);
        this.switchToDetailed = this.switchToDetailed.bind(this);
        this.switchToWeathers = this.switchToWeathers.bind(this);
    }

    componentDidMount() {
        //fetches data from api (token is the API-key)
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=Copenhagen,DK&appid=" +
            token
        )
            .then(response => {
                return response.json();
            })
            .then(data => this.insertData(data));
    }

    // store the 5-days weather information inside its own list
    // day 1 = today, day 2 = tomorrow etc.
    insertData(jsonObject) {
        console.log(jsonObject);
        const listOfWeathers = jsonObject.list;
        const date1 = new Date();
        let date2 = new Date();
        var currentDay = date1.getDay();
        let tempList = [];
        let cleanedData = [];
        let averageDegree = 0
        let count = 0

        listOfWeathers.forEach(element => {
            date2 = new Date(element.dt * 1000); // in order to compare dates

            if (currentDay !== date2.getDay()) {
                // calculates the average temperature
                averageDegree = Math.round(((averageDegree) / count) - 273.15)
                cleanedData.push({ data: tempList, day: currentDay, temperature: averageDegree })
                tempList = []
                currentDay = date2.getDay()
                averageDegree = 0
                count = 0
            }

            count++
            averageDegree += element.main.temp
            tempList.push(element);
        });

        averageDegree = Math.round(((averageDegree) / count) - 273.15)

        this.setState({
            data: cleanedData,
            lastDay: { data: tempList, day: currentDay, temperature: averageDegree },
            finishSearch: true
        });
    }
    // switch to DetailedWeather when click on a weather
    switchToDetailed(data) {
        this.setState({
            dwOpened: true
        });
        console.log(data);
    }

    switchToWeathers() {
        this.setState({
            dwOpened: false
        });
    }

    render() {
        const { finishSearch, data } = this.state;
        return (
            <div>
                {this.state.dwOpened === true ? (
                    <DetailedWeather switchToWeathers={this.switchToWeathers} />) :
                    (<div className="container">
                        <div className="weather-table">
                            {finishSearch === true
                                ? data.map(item => (
                                    <Weather
                                        key={item.day}
                                        day={item.day}
                                        data={item.data}
                                        temperature={item.temperature}
                                        humidity={item.data[0].main.humidity}
                                        wind={item.data[0].wind.speed}
                                        switchToDetailed={this.switchToDetailed}
                                    />)) : null}
                        </div>
                    </div>
                    )}
            </div>
        );
    }
}

export default FiveWeather;
