import React from 'react';

function Item(props) {
    // console.log(props);
    return (
        <>
            <label className="col-sm-2 col-form-label">{props.name}</label>
            <div className="col-sm-10">
                <input type="text" placeholder={props.text} className="form-control" name="name"></input>
            </div>
        </>
    );
}

export default Item;