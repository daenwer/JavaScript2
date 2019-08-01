import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

// создать див
// создать h3, положить в него "Myfreedom"
// создать p, положить в него "Школа №1"
// h3 сложить в див
// p сложить в див
// див отправить в div#root

// var div = document.createElement('div');

// var h3 = document.createElement('h3');
// h3.textContent = "Myfreedom";

// var p = document.createElement('p');
// p.textContent = "Школа №1";

// div.appendChild(h3);
// div.appendChild(p);
// root.appendChild(div);

// var h3React = React.createElement('h3', null, "Myfreedom");
// var pReact = React.createElement('p', null, "Школа №1");
// var divReact = React.createElement('div', null, h3React, pReact);

// jsx -> js
// var school = (
//   <div>
//     <h3>Myfreedom</h3>
//     <p>Школа №1</p>
//   </div>
// );

// function School(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.text}</p>
//     </div>
//   );
// }

// var schools = (
//   <div>
//     <School name="Myfreedom" text="Школа №1" />
//     <School name="Belhard" text="Школа №2" />
//     <School name="Шаг" text="Школа №3" />
//   </div>
// );

// var schoolsData = [
//   {
//     id: 1,
//     name: "Myfreedom",
//     text: "Школа №1"
//   },
//   {
//     id: 12,
//     name: "Belhard",
//     text: "Школа №2"
//   },
//   {
//     id: 20,
//     name: "Шаг",
//     text: "Школа №3"
//   }
// ];

// var schoolsNew = (
//   <div>
//     {schoolsData.map(school => {
//       return (
//         <School key={school.id} name={school.name} text={school.text} />
//       )
//     })}
//   </div>
// );

function App() {
  return (
    <div className="container">
      <List />
    </div>
  )
}


const root = document.getElementById('root');
ReactDOM.render(<App />, root);