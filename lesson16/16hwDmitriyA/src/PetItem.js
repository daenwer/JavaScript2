import React from 'react';

function PetItem(props) {
    return (
        <li>
            <div className="float-right">{`${props.date} ${props.time}`}</div>
            <h3>
                <span>{props.name}</span>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => { props.removeAnimal(props.id) }}>Удалить</button>
            </h3>
            <h5>{props.owner}</h5>
            <p>{props.content}</p>
        </li>
    )
}

export default PetItem;
