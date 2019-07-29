// ООП
// объекто-ориентированное программирование

// наследование - на основе прототипов
// инкапсуляция - на основе замыкания
// полиморфизм - одинаково называемые методы могут выполнять разные действия

var simpleObject = {};
var simpleObject = new Object();

// let product1 = {
//   name: "яблоко",
//   weight: 100,
//   price: 1
// }
// let product2 = {
//   name: "груша",
//   weight: 90,
//   price: 1.5
// }

function Product(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;

  // this.spoil = function() {
  //   this.price -= 0.5;
  // }
}

console.log(Product.prototype); // объект
console.log(Product.prototype.constructor === Product);

Product.prototype.spoil = function() {
  this.price -= 0.2;
}

let product1 = new Product("яблоко", 100, 1);
let product2 = new Product("груша", 90, 1.5);

product1.spoil();
product2.spoil();
product2.spoil();

console.log(product1, product2);

// var numbers = [];
// var numbers = new Array();

// var string = "kadfjasdf";
// var string = new String("kadfjasdf");

var number = 5;
var number = new Number(5);

var date = new Date();

console.log(Array.prototype);
console.log(Object.prototype);
console.log(String.prototype);
console.log(Number.prototype);
console.log(Boolean.prototype);
console.log(Date.prototype);
console.log(Promise.prototype);


function Child(name, lname) {
  this.name = name;
  this.lname = lname;
  this.step = 0;

  this.method = function() {
    console.log("дурацкий метод");
  }
}

Child.prototype.walk = function() {
  this.step += 1;
}

var vasya = new Child("Вася","Пупкин");
vasya.walk();
vasya.walk();
vasya.walk();
console.log(vasya);


function Teenager(name, lname, hobby) {
  Child.call(this, name, lname); // наследование свойств
  this.hobby = hobby;
}

// наследование методов
Teenager.prototype = Object.create(Child.prototype);
Teenager.prototype.constructor = Teenager;

Teenager.prototype.run = function() {
  this.step += 100;
}

Teenager.prototype.walk = function() {
  this.step += 3;
}

var stepa = new Teenager("Степа", "Новиков", "плаванье");
stepa.walk();
stepa.walk();
stepa.walk();
stepa.run();
stepa.run();
stepa.run();
console.log(stepa);


function Person(name, lname, hobby, passport) {
  let secret = "Секрет, который никто не должен знать!";
  
  Teenager.call(this, name, lname, hobby); // наследование свойств
  this.passport = passport;

  this.getSecret = function(password) {
    if (password !== 1234) {
      console.log("вы ввели неправильный пароль");
      return;
    }
    
    console.log(secret);
  }
}

// наследование методов
Person.prototype = Object.create(Teenager.prototype);
Person.prototype.contructor = Person;

Person.prototype.setNewName = function(newName) {
  this.name = newName;
}

var zhenya = new Person("Женя","Ланин","js","MP2967149");
zhenya.walk();
zhenya.run();

zhenya.setNewName("Евгений");

console.log(zhenya.secret); // undefined
console.log(zhenya.getSecret(1234));

console.log(zhenya);



// es6
class Junior {
  constructor(exp, tech, countBook = 0) {
    this.exp = exp;
    this.tech = tech;
    this.countBook = countBook;
  }
  
  learn() {
    this.countBook += 1;
  }
}

let petya = new Junior(0, ["html", "css", "js"]);
petya.learn();
console.log(petya);


//           наследование методов
class Middle extends Junior {
  constructor(exp, tech, countBooks, works) {
    // вызов родительского конструктора
    super(exp, tech, countBooks); // наследование свойств
    this.works = works;
    this.karma = 0;
  }

  teach() {
    this.karma += 1;
  }
}

let middle = new Middle(
  2, 
  ["html","css","scss","js","react","redux"], 
  10, 
  ["OOO Вася", "ООО iTechArt"]
);
middle.learn();
middle.teach();
middle.teach();
console.log(middle);

class Senior extends Middle {
  constructor(exp, tech, countBooks, works) {
    super(exp, tech, countBooks, works);
  }

  teach() {
    this.karma += 20;
  }
}

let senior = new Senior(5, ["большой"], 50, ["много"]);
senior.teach();
console.log(senior);


// подтема
// http / https


// http://onliner.by -> IP

// <- html



// http://nbrb.by/currency/145  -> IP

// <- json


// статусы http запросов

// 100е информационные
// 200е успешные
// 300е перенаправления
// 400е ошибки клиента
// 500е ошибки сервера

// Postman

// http(s)
// ftp file transer protocol
// file/
// C:/
// D:/
// ssh
// sftp
