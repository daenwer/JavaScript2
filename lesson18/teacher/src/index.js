import axios from 'axios';

const root = document.getElementById('root');

function timeout(time) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// timeout(3000)
//   .then(() => {
//     console.log("мы прождали три секунды");
    
//     var request = axios("https://reqres.in/api/users/1");
//     return request;
//   })
//   .then((response) => {
//     console.log(response);

//     return timeout(3000);
//   })
//   .then(() => {
//     console.log("прошло после запроса еще 3 секунды");
//   })



// var resolvedPromise = Promise.resolve();
// var rejectedPromise = Promise.reject();

// "https://reqres.in/api/users?page=1"
// "https://reqres.in/api/users?page=2"
// "https://reqres.in/api/users?page=3"
// "https://reqres.in/api/users?page=4"

var peoples = [];
var responses = 0;

// for (let i = 1; i < 5; i++) {
//   axios(`https://reqres.in/api/users?page=${i}`)
//     .then(response => {
//       responses++;
//       peoples.push(...response.data.data);

//       if (responses === 4) {
//         next(peoples);
//       }
//     });
// }



// Promise.all([promise1, promise2, ...]);

// const apis = [1, 2, 3, 4].map(page => `https://reqres.in/api/users?page=${page}`);
// console.log(apis);

// const requests = [1, 2, 3, 4].map(page => axios(`https://reqres.in/api/users?page=${page}`));

// var peoples = [];
// Promise.all(requests)
//   .then(responses => {

//     responses.forEach(response => {
//       peoples.push(...response.data.data);
//     })
    
//     renderPeoplesInSelect(peoples);
//   })

// console.log(peoples);




// async function getAllUsers() {
//   const responses = await Promise.all(requests);
//   console.log(
//     responses
//   );
//   return responses;
// }

// getAllUsers();

// Promise.race([promise1, promise2, promise3])
//   .then(response => {}) 

const wWidth = window.innerWidth;
const wHeight = window.innerHeight;

document.documentElement.onclick = function(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  if (mouseX <= wWidth / 2 && mouseY <= wHeight / 2) {
    console.log("1й сектор");
  } else if (mouseX > wWidth / 2 && mouseY <= wHeight / 2) {
    console.log("2й сектор");
  } else if (mouseX <= wWidth / 2 && mouseY > wHeight / 2) {
    console.log("3й сектор");
  } else {
    console.log("4й сектор");
  }
}