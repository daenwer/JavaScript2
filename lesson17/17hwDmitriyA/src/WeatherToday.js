import React from 'react';

function WeatherToday(props) {

    let data = {};
    let city = '';
    let country = '';

    if (!props.weathers) {
        return (
            <div>Loading...</div>
        )
    } else {
        data = props.weathers;
        city = props.city;
        country = props.country;
    }

    return (
            <div className="weathertoday">
                    {city}, {country}
                    {data.dateTime}
                    {data.time}
                    {data.temp}
                    {data.weatherDescriptions}
                    {data.weatherIcon}
                    {data.windDeg}
                    {data.windSpeed}
            </div>
    )
}

export default WeatherToday;
