import React from 'react';
import './FiveWeather.css';
import Weather from "./Weather";
import token from "../data/token";

class FiveWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [{ data: [], day: 0 }],
            lastDay: { data: [], day: 0 }, //maybe used later.
            finishSearch: false
        }

        this.insertData = this.insertData.bind(this)

    }

    componentDidMount() {
        //fetches data from api (token is the API-key)
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Copenhagen,DK&appid=" + token)
            .then(response => { return response.json() })
            .then(data => this.insertData(data));

    }

    // store the 5-days weather information inside its own list
    // day 1 = today, day 2 = tomorrow etc.
    insertData(jsonObject) {
        const listOfWeathers = jsonObject.list;
        const date1 = new Date()
        let date2 = new Date()
        var currentDay = date1.getDay();
        let tempList = []
        let cleanedData = [];
        listOfWeathers.forEach(element => {
            date2 = new Date(element.dt * 1000)
            if (currentDay !== date2.getDay()) {
                cleanedData.push({ data: tempList, day: currentDay });
                tempList = [];
                currentDay = date2.getDay();
            }
            tempList.push(element);

        });

        this.setState({
            data: cleanedData,
            lastDay: { data: tempList, day: currentDay },
            finishSearch: true
        })
    }

    render() {
        const { finishSearch, data } = this.state

        return (
            <div className="container">
                <div className="weather-table">
                    {finishSearch === true ?
                        data.map(item => (
                            <Weather key={item.day} day={item.day} data={item.data} temperature={Math.round(item.data[0].main.temp - 273.15)} />))
                        : null}

                </div>
            </div>

        );
    }

}

export default FiveWeather;
