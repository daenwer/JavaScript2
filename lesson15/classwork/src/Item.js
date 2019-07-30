import React from 'react';

function Item(props) {
    // console.log(props);
    return (
        <div>
            <h3>{ props.name }</h3>
            <p>{ props.text }</p>
        </div>
    );
}

export default Item;