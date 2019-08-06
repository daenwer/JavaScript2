import React from 'react';

import Item from './Item';

function List(props) {
  const persons = props.persons;
  
  return (
    <ul>
      {persons.map(person => (
        <Item key={person.id} {...person} removePerson={props.removePerson} />
      ))}
    </ul>
  )
}

export default List;