import React from 'react';

import Item from './Item';

function List(props) {
  const persons = props.persons;
  
  return (
    <ul>
      {persons.map((person, index) => (
        <Item key={index} index={index} {...person} removePerson={props.removePerson} />
      ))}
    </ul>
  )
}

export default List;