import React from 'react';

import WeatherItem from './WeatherItem';

function WeaterOther(props) {

    const weathers = props.weathers;

    weathers.map(weather => {
        console.log({...weather})
    })

    return (
        <div className="weatherother">
            <ul className="list">

                {weathers.map(weather => (
                    //<WeatherItem {...weather}/>
                    <WeatherItem key={weather.id} {...weather}/>
                ))}


            </ul>
        </div>

    )
}

export default WeaterOther;