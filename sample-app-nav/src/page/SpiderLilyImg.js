import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.statte = {
            photos: []
        }
    }
    componentDidMount() {
        fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=spiderlily")
        .then(response => {
            if (!response.ok) {
                throw Error("Error fetching");
            }
            return response.json()
        .then(allData => {
            this.setState({ photos: allData });
        })
        .catch(err => {
            throw Error(err.message);
        });
        }
        );
    }
}