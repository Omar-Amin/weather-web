import React from 'react';
import './FiveWeather.css';
import Weather from "./Weather";
import token from "../data/token";

class FiveWeather extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [1, 2, 3, 4, 5],
            items: [{}]
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
                cleanedData.push(tempList);
                tempList = [];
                currentDay = date2.getDay();
            }
            tempList.push(element);

        });

        // the last list is not added, thus to make sure we push it at the end
        cleanedData.push(tempList)
        this.setState({
            items: cleanedData
        })
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="container">
                <div className="weather-table">
                    {this.state.data.map(item => (
                        <Weather key={item} day={item} />
                    ))}
                </div>
            </div>

        );
    }

}

export default FiveWeather;
