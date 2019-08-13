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
            <div className='col-12 mt-2'>{city}, {country} </div>
            <img src={'images/time.png'} className='col-2'></img>
            {data.dateTime.split(' ')[1]}<br/>
            <img src={'images/' + data.weatherIcon + '.png'} className='col-4 offset-4'></img>
            <div className='col-4 offset-4'>
                <h4>{data.temp + '℃'}</h4>
            </div>
            <br/>
            <img src={'images/speed.png'} className='col-2 offset-3'></img>
            {data.windSpeed + ' m/s'}
        </div>
    )
}

export default WeatherToday;
