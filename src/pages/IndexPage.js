import React from 'react';
import './indexpage.css';
import token from "../data/token";

class IndexPage extends React.Component {
    constructor() {
        super()

        this.state = {
            data: []
        }

    }

    render() {
        fetch("https://api.spotify.com/v1/search?q=ken&type=artist", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json()).then((object) => console.log(object))

        return (
            <div className="App">
                <h1></h1>
            </div>
        );
    }

}

export default IndexPage;
