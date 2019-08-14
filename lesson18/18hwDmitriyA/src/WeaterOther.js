import React from 'react';

import Shape from './Shape';

function WeaterOther(props) {

    const weathers = props.weathers;

    return (
        <div className="weatherother">
            <ul className="list">
                {weathers.map(weather => (
                    <Shape key={weather.id} {...weather}/>
                ))}
            </ul>
        </div>
    )
}

export default WeaterOther;