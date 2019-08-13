import React from 'react';

import WeatherItem from './WeatherItem';

function WeaterOther(props) {

    const weathers = props.weathers;

    return (
        <div className="weatherother">
            <ul className="list">
                {weathers.map(weather => (
                    <WeatherItem key={weather.id} {...weather}/>
                ))}
            </ul>
        </div>
    )
}

export default WeaterOther;