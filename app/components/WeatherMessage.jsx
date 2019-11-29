import React from 'react';

export default function WeatherMessage({location, temp}) {
    return (
        <h3>Right now temperature in <b>{location}</b> is <b>{temp}°C</b></h3>
    )
}
