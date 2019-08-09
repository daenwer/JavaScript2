import React from 'react';

function WeatherItem(props) {

    // const weather = props.weather;
    // console.log(weather);

    return (
        <li>
            <div className="weatheritem">
            {props.dateTime}
            {props.time}
            {props.temp}
            {props.weatherDescriptions}
            {props.weatherIcon}
            {props.windDeg}
            {props.windSpeed}
            </div>
        </li>
    )
}

export default WeatherItem;
