import React from 'react';

import PetItem from './PetItem';

function PetsList(props) {

  const animals = props.animals;

  return (
    <ul className="list">
      {animals.map(animal => (
          <PetItem key={animal.id} {...animal} removeAnimal={props.removeAnimal} />
          ))}
    </ul>
  )
}

export default PetsList;