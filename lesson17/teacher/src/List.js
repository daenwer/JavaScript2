import React from 'react';

import Item from './Item';

function List({ persons, removePerson }) {
  return (
    <ul>
      {persons.map(person => (
        <Item key={person.id} {...person} removePerson={removePerson} />
      ))}
    </ul>
  )
}

export default List;