import React from 'react';

export default class WeatherForm extends React.Component {
    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        ref="location"
                        required="required"
                        pattern="[a-zA-Z]{3,}"
                        title="At least three letters required"
                    />
                    <button className="mt-2 btn btn-primary btn-block">Get Weather</button>
                </form>
            </div>
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.refs.location.value)
    }
}
