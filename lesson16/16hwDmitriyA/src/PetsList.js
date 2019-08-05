import React from 'react';

import PetItem from './PetItem';

const arr = [
  {
    date: '13.01.2018',
    time: '15:00',
    name: 'Jack',
    owner: 'Lukas',
    descriptionz: 'Dog',
  },
  {
    date: '23.05.2018',
    time: '18:08',
    name: 'Pushok',
    owner: 'Helen',
    descriptionz: 'Cat',
  },
  {
    date: '08.11.2018',
    time: '09:40',
    name: 'Nagaina',
    owner: 'Tom',
    descriptionz: 'Snake',
  }
];

function PetsList() {
  return (
    <ul className="list">
      {arr.map((pet,index) => {
        return (
          <PetItem key={index} {...pet} />
        )
      })}
    </ul>
  );
}

export default PetsList;