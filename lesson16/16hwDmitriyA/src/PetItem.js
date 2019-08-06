import React from 'react';

function PetItem(props) {
  const { name, owner, date, time, content } = props;
  // const { name, owner, date, time, description } = props;
  return (
    <li>
      <div className="float-right">{`${date} ${time}`}</div>
      <h3>
        <span>{name}</span> 
        <button className="btn btn-danger btn-sm ml-2">Удалить</button>
      </h3>
      <h5>{owner}</h5>
      <p>{content}</p>
    </li>
  )
}

export default PetItem;