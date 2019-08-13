// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import App from './App';

const root = document.getElementById('root');
// ReactDOM.render(<App />,root);

const tdAll = document.querySelectorAll('table td');

// console.log(tdAll);

// tdAll.forEach(td => {
//     td.onсlick = function (e) {
//         console.log(e);
//         e.target.classList.toggle('active');
//     }
// });

const table = document.querySelector('table');
table.onclick = function (e) {
    // console.log(table);
    // console.log(this);
    // console.log(e.target);

    if (e.target.tagName === 'TD') {
        e.target.classList.toggle('active');
    }
}

const button = document.querySelector('button');
// button.onclick = function (e) {
//     e.stopPropagation()
//     console.log('клик по button');
// }

// document.body.onclick = function () {
//     console.log('клик по body')
// }
//
// document.documentElement.onclick = function () {
//     console.log('клик по html');
// }

button.addEventListener('click', function () {
    console.log('клик по button addEventListener')
}, true);

document.body.addEventListener('click', function () {
    console.log('клик по body addEventListener')
}, true);

document.documentElement.addEventListener('click', function () {
    console.log('клик по html addEventListener')
}, true);

console.log(f);

var f = 1;

