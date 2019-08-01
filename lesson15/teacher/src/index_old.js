// // diplicator
// Array.prototype.duplicator = function() {
//   // this - массив, который пользуется этим методом

//   // иммутабельность
//   var newArr = [...this, ...this];
//   // return newArr;

//   // мутация 
//   this.push(...this);
// }

// var numbers = [2,4,6,8,1];


// numbers.duplicator();

// // наделите массивы возможностью менять местами первый и последний элементы
// // [1,2,3,4,5] 
// // then:
// // [5,2,3,4,1] 

// Array.prototype.changeFirstAndLast = function() {
  
//   // var first = this[0];
//   // var last = this[this.length - 1];
//   // this[0] = last;
//   // this[this.length - 1] = first;

//   // var last = this[this.length - 1];
//   // this[this.length - 1] = this[0];
//   // this[0] = last;

//   var copy = [...this];
//   // [copy[0], copy[copy.length - 1]] = [copy[copy.length - 1], copy[0]];
//   copy[0] = this[this.length - 1];
//   copy[copy.length - 1] = this[0];
//   return copy;
// }

// var numbers = [1, 2, 3, 4, 5];
// numbers.changeFirstAndLast(); 

// function sum(a,b) {
//   return a + b;
// }
// или
const sum = (a,b) => a + b;

// var res1 = sum(2,3); // 5
// var res2 = sum(3,5); // 8



function sumNew(a) {
  return function(b) {
    return a + b;
  }
}
// или
// const sumNew = a => b => a + b;

// console.log( sumNew(2)(3) ); // 5
// console.log( sumNew(3)(5) ); // 8

function sumNewNew(a) {
  var summa = a;
  
  function inner(b) {
    summa += b;

    return inner;
  }

  inner.toString = function() {
    return summa;
  }

  return inner;
}


var res1 = sumNewNew(2)(3)(5); // 10
console.log(res1 + 2);

// var res2 = sumNewNew(2)(3)(5)(8);    // 18
// var res3 = sumNewNew(2)(3);          // 5
// var res4 = sumNewNew(2)(3)(10)(10)(5);  // 30

class Calc {
  constructor(initValue) {
    this.value = initValue;
  }

  plus(number) {
    this.value += number;
  }
  minus(number) {
    this.value -= number;
  }
  mult(number) {
    this.value *= number;
  }
  divide(number) {
    this.value /= number;
  }
  getValue() {
    return this.value;
  }
}

var calc = new Calc(20);
calc.plus(2);
calc.minus(2);
calc.mult(2);
calc.divide(2);
console.log(calc.getValue());



class Calc2 {
  constructor(initValue) {
    this.value = initValue;
  }
  plus(number) {
    this.value += number;
    return this;
  }
  minus(number) {
    this.value -= number;
    return this;
  }
  mult(number) {
    this.value *= number;
    return this;
  }
  divide(number) {
    this.value /= number;
    return this;
  }
  
  toString() {
    return this.value;
  }
}

var calc2 = new Calc2(0);
calc2.plus(10).minus(2).mult(1).divide(4)

console.log(calc2 + 2); 