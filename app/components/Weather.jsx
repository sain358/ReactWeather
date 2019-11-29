import React from 'react';
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import getTemperatureByLocation from "../api/openWeatherMap"

export default class Weather extends React.Component {
    state = {
        isLoading: false
    };

    render() {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {this.renderMessage()}
            </div>
        )
    }

    renderMessage = () => {
        if (this.state.isLoading) {
            return <h3>Fetching weather...</h3>
        } else if (this.state.temp) {
            return <WeatherMessage location={this.state.location} temp={this.state.temp}/>
        }
    }

    handleSearch = (location) => {
        this.setState({isLoading: true});
        getTemperatureByLocation(location).then(
            (t) => {
                this.setState({isLoading: false, location: location, temp: t})
            },
            (e) => {
                this.setState({isLoading: false, location: "", temp: ""});
                alert(e.message);
            }
        )
    }

}