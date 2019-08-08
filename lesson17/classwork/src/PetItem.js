import React from 'react';

function PetItem(props) {
  return (
    <li>
      {props.fio} {props.age}
      <button onClick={() => { props.removePerson(props.id) }}>Удалить</button>
    </li>
  )
}

export default PetItem;