import React from 'react';

import PetItem from './PetItem';

function List(props) {
  const persons = props.persons;
  
  return (
    <ul>
      {persons.map(person => (
        <PetItem key={person.id} {...person} removePerson={props.removePerson} />
      ))}
    </ul>
  )
}

export default List;