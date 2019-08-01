import React from 'react';


function Item(props) {

    return (
        <li>
            {props.fio} {props.age}
            <button>Удалить</button>
        </li>
    )
}

export default Item;