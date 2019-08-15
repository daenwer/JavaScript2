import React from 'react';
import AutoAddShapes from "./AutoAddShapes";

function Button(props) {

    return (
        <div className='float-right'>
            <AutoAddShapes autoAddShape={props.autoAddShapes} create={props.create}
                           widthWindow={props.widthWindow} heightWindow={props.heightWindow}/>
            <button type="button" className="btn btn-secondary btn-sm  m-1 mt-2" onClick={props.remove}>Remove</button>
        </div>
    )
}

export default Button;
