import React from 'react';
import qs from "query-string"
import getTemperatureByLocation from "../api/openWeatherMap"
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import ErrorModal from "./ErrorModal"

export default class WeatherPage extends React.Component {
    state = {
        isLoading: false,
        errorMessage: undefined
    };

    componentDidMount() {
        var parsedQuery = qs.parse(this.props.location.search);
        if (parsedQuery && parsedQuery.location && parsedQuery.location.length > 2) {
            this.handleSearch(parsedQuery.location)
        }
    }

    render() {
        return (
            <div>
                <h3>Type city name:</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {this.renderMessage()}
                {this.renderError()}
            </div>
        )
    }

    renderMessage = () => {
        if (this.state.isLoading) {
            return <h3>Fetching weather...</h3>
        } else if (this.state.temp) {
            return <WeatherMessage location={this.state.location} temp={this.state.temp}/>
        }
    };

    renderError = () => {
        if (typeof this.state.errorMessage === "string") {
            return <ErrorModal message={this.state.errorMessage} onClose={() => this.setState({errorMessage: undefined})}/>
        }
    };

    handleSearch = (location) => {
        this.setState({isLoading: true});
        getTemperatureByLocation(location).then(
            (t) => {
                this.setState({isLoading: false, location: location, temp: t})
            },
            (e) => {
                this.setState({isLoading: false, location: "", temp: "", errorMessage: e.message});
            }
        )
    }

}