import React from 'react';

import Item from './Item';

var schoolsData = [
  {
    id: 1,
    name: "Myfreedom",
    text: "Школа №1"
  },
  {
    id: 12,
    name: "Belhard",
    text: "Школа №2"
  },
  {
    id: 20,
    name: "Шаг",
    text: "Школа №3"
  }
];

function List() {
  return (
    <div>
      {schoolsData.map(school => {
        return (
          <Item key={school.id} name={school.name} text={school.text} />
        )
      })}
    </div>
  );
}

export default List;



/*
// аналог 1

function List() {
  return (
    <div>
      {schoolsData.map(school => (
          <WeatherItem key={school.id} name={school.name} text={school.text} />
      ))}
    </div>
  );
}

*/

/*
// аналог 2

function List() {
  return (
    <div>
      {schoolsData.map(school => <WeatherItem key={school.id} name={school.name} text={school.text} />)}
    </div>
  );
}

*/

/*
// аналог 3

function List() {
  const list = schoolsData.map(school => <WeatherItem key={school.id} name={school.name} text={school.text} />);
  
  return (
    <div>
      {list}
    </div>
  );
}

*/