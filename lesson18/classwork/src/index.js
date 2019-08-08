import axios from 'axios';

const root = document.getElementById('root');

// function timeout(time) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve('3 секунды прошло');
//         }, time);
//     });
// }


// timeout(3000)
//     .then(() => {
//         console.log('Мы прождали 3 секунды');
//         return axios('https://reqres.in/api/users/1');
//     })
//     .then((response) => {
//         console.log(response);
//     })

// var resolvedPromise = Promise.resolve();
// var rejetedPromise = Promise.reject();

//
// timeout(3000)
//     .then(() => {
//         console.log('Мы прождали 3 секунды');
//         return axios('https://reqres.in/api/users?page=1');
//     })
//     .then((response) => {
//         console.log(response);
//     })

// let result = [];
//
// for (let i = 1; i < 5; i++ ) {
//     axios(`https://reqres.in/api/users?page=${i}`)
//         .then(response => {
//             result.push(...response.data.data);
//             // console.log(response);
//             console.log(result);
//         })
// }

// Promise.all();

// const apis = [1, 2, 3, 4].map(page => `https://reqres.in/api/users?page=${page}`);
// // console.log(apis);
//
// const requests = [1, 2, 3, 4].map(page=> axios(`https://reqres.in/api/users?page=${page}`));
// // console.log(requests);
//
// async function getAllUsers() {
//     const responses = await Promise.all(requests);
// }
//
// console.log(getAllUsers());

// let peoples =[];
// Promise.all(requests)
// .then(responses => {
//     responses.forEach(response => {
//         peoples.push(...response.data.data);
//     })
//
// })


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

document.documentElement.onclick = function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
        console.log('1й сектор')
    } else if (mouseX > windowWidth / 2 && mouseY < windowHeight / 2) {
        console.log('2й сектор')
    } else if (mouseX < windowWidth / 2 && mouseY > windowHeight / 2) {
        console.log('3й сектор')
    } else {
        console.log('4й сектор')
    }
}