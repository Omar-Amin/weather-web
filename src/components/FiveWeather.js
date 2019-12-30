import React from "react";
import "./FiveWeather.css";
import Weather from "./Weather";
import token from "../data/token";
import DetailedWeather from "./DetailedWeather";

class FiveWeather extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [{ data: [], day: 0, temperature: 0, wind: 0, humidity: 0, listTemp: [] }],
            lastDay: { data: [], day: 0, temperature: 0, wind: 0, humidity: 0 }, //maybe used later.
            finishSearch: false,
            dwOpened: false,
            currentData: [{}],
            city: "",
            country: ""
        };

        this.insertData = this.insertData.bind(this);
        this.switchToDetailed = this.switchToDetailed.bind(this);
        this.switchToWeathers = this.switchToWeathers.bind(this);
    }

    componentDidMount() {
        //fetches data from api (token is the API-key)
        const city = "Copenhagen"
        const country = "DK"

        this.setState({
            city: city,
            country: country
        })

        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=" +
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
        const listOfWeathers = jsonObject.list;
        const date1 = new Date();
        let date2 = new Date();
        var currentDay = date1.getDay();
        let tempList = [];
        let cleanedData = [];
        let averageDegree = 0;
        let count = 0;
        let averageWind = 0;
        let averageHumidity = 0;
        let listOftemp = [{}]

        listOfWeathers.forEach(element => {
            date2 = new Date(element.dt * 1000); // in order to compare dates

            if (currentDay !== date2.getDay()) {
                // calculates the average temperature
                averageDegree = Math.round(averageDegree / count - 273.15);
                averageWind = Math.round((averageWind / count) * 100) / 100;
                averageHumidity = Math.round(averageHumidity / count);
                cleanedData.push({
                    data: tempList,
                    day: currentDay,
                    temperature: averageDegree,
                    wind: averageWind,
                    humidity: averageHumidity,
                    listTemp: listOftemp
                });

                listOftemp = [{}]
                tempList = [];
                currentDay = date2.getDay();
                averageDegree = 0;
                averageWind = 0;
                count = 0;
            }

            count++;
            // list of info for the graph
            listOftemp.push({ temp: Math.round(element.main.temp - 273.15), hours: date2.getHours() })
            averageDegree += element.main.temp;
            averageWind += element.wind.speed;
            averageHumidity += element.main.humidity;
            tempList.push(element);
        });

        averageDegree = Math.round(averageDegree / count - 273.15);
        averageWind = Math.round((averageWind / count) * 100) / 100;
        averageHumidity = Math.round(averageHumidity / count);

        this.setState({
            data: cleanedData,
            lastDay: {
                data: tempList,
                day: currentDay,
                temperature: averageDegree,
                wind: averageWind,
                humidity: averageHumidity
            },
            finishSearch: true
        });
    }

    // switch to DetailedWeather when click on a weather
    switchToDetailed(data, degree) {
        this.setState({
            dwOpened: true,
            currentData: data
        });
    }

    switchToWeathers() {
        this.setState({
            dwOpened: false
        });
    }

    render() {
        const { finishSearch, data, currentData, city } = this.state;

        return (
            <div>
                {this.state.dwOpened === true ? (
                    <DetailedWeather
                        switchToWeathers={this.switchToWeathers}
                        data={currentData}
                        city={city}
                    />
                ) : (
                        <div className="container">
                            <div className="weather-table">
                                {finishSearch === true
                                    ? data.map(item => (
                                        <Weather
                                            key={item.day}
                                            day={item.day}
                                            data={item}
                                            temperature={item.temperature}
                                            humidity={item.humidity}
                                            wind={item.wind}
                                            switchToDetailed={
                                                this.switchToDetailed
                                            }
                                        />
                                    ))
                                    : null}
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default FiveWeather;
