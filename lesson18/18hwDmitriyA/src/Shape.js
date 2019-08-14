import React from 'react';

function Shape(props) {

    // TODO: в if изменять только style остальное в return
    if (props.class !== 'rhombus') {
        return (
            <div className={props.class} style={{background: props.color, left: props.x, top: props.y}}>{props.id}</div>
        )
    } else {
        return (
            // TODO: как передать в :after -> border-top-color
            <div className={props.class} style={{borderBottomColor: props.color, left: props.x, top: props.y}}>{props.id}</div>
        )
    }
}

export default Shape;
