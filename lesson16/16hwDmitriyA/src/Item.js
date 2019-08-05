import React from 'react';

function Item(props) {
  return (
    <li>
      {props.fio} {props.age}
      <button onClick={() => { props.removePerson(props.index) }}>Удалить</button>
    </li>
  )
}

export default Item;