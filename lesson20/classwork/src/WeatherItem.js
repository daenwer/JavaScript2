import React from 'react';

function WeatherItem(props) {

    return (
        <li>
            <div className="weatheritem">
                <span className='col-4'>
                    {props.dateTime}
                </span>
                <img src={'images/' + props.weatherIcon + '.png'} className='col-4'></img>
                <span className='col-4'>
                    {props.temp + '℃'}
                </span>
            </div>
        </li>
    )
}

export default WeatherItem;
