import React from "react";
import './popup.css'

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        joke: null
    };

    async componentDidMount() {
        const url = "https://official-joke-api.appspot.com/random_joke";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ joke: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div > loading... < /div>;
        }

        if (!this.state.joke) {
            return <div > didn 't get a joke</div>;
        }

        return ( 
            <
            div >
            <p className="setup"> { this.state.joke.setup } < /p>
             < p className="line"> { this.state.joke.punchline } < /p>
           
       
            <
            /div>
            
        );
    }
}