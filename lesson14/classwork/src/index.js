import './styles/bootstrap.min.css';
import './/styles/styles.css';

// let product1 = {
//     name: 'Apple',
//     weight: 100,
//     price: 1
// }
//
// let product2 = {
//     name: 'Pear',
//     weight: 90,
//     price: 2
// }

function Product(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;

    this.spoil = function () {
        this.price -= 0.5
    };
}

let product1 = new Product('Apple', 100, 1);
let product2 = new Product('Pear', 90, 2.5);

// console.log(product1);
// product1.spoil();
// console.log(product1);

// console.log(Product.prototype);
// console.log(Product.prototype.constructor === Product);

Product.prototype.spoil = function () {
    this.price -= 0.2;
};

product1.spoil();
// console.log(product1);

// console.log(Array.prototype);

function Child(name, lname) {
    this.name = name;
    this.lname = lname;
    this.step = 0;
}

Child.prototype.walk = function () {
    this.step += 1;
}

let vasya = new Child('Vasya', 'Pupkin');
vasya.walk();
vasya.walk();
vasya.walk();

// console.log(vasya);

function Teenager(name, lname, hobby) {
    Child.call(this, name, lname);
    this.hobby = hobby;
}

Teenager.prototype = Object.create(Child.prototype);
Teenager.prototype.constructor = Teenager;

Teenager.prototype.walk = function() {
    this.step += 3;
}

Teenager.prototype.run = function() {
    this.step += 100;
}

let stepa = new Teenager('Stepa', 'Novikov', 'swimming');

// console.log(stepa);

function Person(name, lname, hobby, passport) {
    Teenager.call(this, name, lname, hobby);
    this.passport = passport;
}

Person.prototype = Object.create(Teenager.prototype);
Person.prototype.constructor = Person;

let dmitriy = new Person('Dima', 'Andreew', 'js', 'not remember');
dmitriy.walk();
dmitriy.run();

Person.prototype.setNewName = function (newName) {
    this.name = newName;
}

dmitriy.setNewName('Dmitriy');

// console.log(dmitriy);

// es6

class Junior {
    constructor(exp, tech, countBock=0) {
        this.exp = exp;
        this.texh = tech;
        this.countBook = countBock;
    }

    learn() {
        this.countBook++;
    }
}

let petya = new Junior(0, ['html', 'css', 'js']);
petya.learn();
// console.log(petya);

class Middle extends Junior {
    constructor(exp, tech, countBooks, works) {
        super(exp, tech, countBooks);
        this.works = works;
        this.karma = 0;
    }
    teach() {
        this.karma++;
    }
}

let middle = new Middle(
    2,
    ['html', 'css', 'scss', 'js', 'react', 'redux'],
    10,
    ['ООО Вася', 'iTechArt']
);

middle.learn();
middle.teach();
middle.teach();
middle.teach();
// console.log(middle);

class Senjor extends Middle {
    constructor(exp, tech, countBook, works) {
        super(exp, tech, countBook, works);
    }
    teach(){
        this.karma += 20;
    }
}

let senior = new Senjor(5, ['big'], 50, ['much']);
senior.teach();
console.log(senior);