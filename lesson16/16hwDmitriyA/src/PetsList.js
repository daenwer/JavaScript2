import React from 'react';

import PetItem from './PetItem';

import Form from './Form';
// import animals from './Form';

// let arr = animals;
const arr = [
  {
    name: 'Jack',
    owner: 'Lukas',
    date: '13.01.2018',
    time: '15:00',
    content: 'Dog',
  },
  // {
  //   date: '23.05.2018',
  //   time: '18:08',
  //   name: 'Pushok',
  //   owner: 'Helen',
  //   descriptionz: 'Cat',
  // },
  // {
  //   date: '08.11.2018',
  //   time: '09:40',
  //   name: 'Nagaina',
  //   owner: 'Tom',
  //   descriptionz: 'Snake',
  // }
];

function PetsList() {

  console.log('animals = ', Form.animals);

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