import React from 'react';

export default class WeatherForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.refs.location.value)
    }
}
