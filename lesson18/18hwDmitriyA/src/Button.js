import React from 'react';

function Button(props) {

    return (
        <div className='float-right'>
            <button type="button" className="btn btn-primary btn-sm m-1 mt-2 red" onClick={props.changeColor}>Change</button>
            <button type="button" className="btn btn-secondary btn-sm  m-1 mt-2" onClick={props.remove}>Remove</button>
        </div>
    )
}

export default Button;
