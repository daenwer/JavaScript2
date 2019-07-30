import './styles/bootstrap.min.css';
import './/styles/styles.css';
// import {classwork} from "./script";
import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

// document.addEventListener('DOMContentLoaded', function () {
//
//     // classwork();
//
//
// });

// // чистый javascript
// let div = document.createElement('div');
// let h = document.createElement('h3');
// h.textContent = 'MyFreedom';
// let p = document.createElement('p');
// p.textContent = 'Школа №1';
// div.appendChild(h);
// div.appendChild(p);
// const root = document.getElementById('root');
// root.appendChild(div);

// const root = document.getElementById('root');

// let h3React = React.createElement('h3', null, 'Myfreedom');
// let pReact = React.createElement('p', null, 'Школа №1');
// let divReact = React.createElement('div', null, h3React, pReact);

// let school = (
//     <div>
//         <h3>Myfreedom</h3>
//         <p>Школа №1</p>
//     </div>
// );

// ReactDOM.render(divReact, root);

// function Item(props) {
//     // console.log(props);
//
//     return (
//         <div>
//             <h3>{ props.name }</h3>
//             <p>{ props.text }</p>
//         </div>
//     );
// }

// let school = Item();
// ReactDOM.render(school, root);

// {/*<Item />*/}
// {/*ReactDOM.render(<Item />, root);*/}

// let schools = (
//     <div>
//         <Item name='Myfreedom' text='Школа №1'/>
//         <Item name='Belhard' text='Школа №2'/>
//         <Item name='Шаг' text='Школа №3'/>
//     </div>
// );
// ReactDOM.render(schools, root);


// let schoolsData = [
//     {
//         id: 1,
//         name:'Myfreedom',
//         text: 'Школа №1'
//      },
//     {
//         id: 10,
//         name:'Belhard',
//         text: 'Школа №2'
//     },
//     {
//         id: 20,
//         name: 'Шаг',
//         text: 'Школа №3'
//     }
// ];
//
// let schoolsNew = (
//     <div>
//         { schoolsData.map(school => {
//             return (
//                 <School key={school.id} name={school.name} text={school.text}/>
//             )
//         }) }
//     </div>
// )
// ReactDOM.render(schoolsNew, root)

function App() {
    return (
        <div className="container">
            <List />
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
