import './styles/bootstrap.min.css';
import './/styles/styles.css';

// import {boardTop, renderHTML} from "./script";
//
// boardTop();
// renderHTML();

import {start, makeExchange, Calc, CalcChain} from "./script";

start();

console.log(makeExchange(51)); // должен дать в ответ { H: 1, P: 1 }
console.log(makeExchange(49)); // должен дать в ответ { Q: 1, D: 2, P: 4 }
console.log(makeExchange(99)); // должен дать в ответ { P: 1, Q: 1, D: 2, P: 4 }
console.log(makeExchange(100)); // должен дать в ответ { H: 2 }

const calc = new Calc(10); // 10 это начальное число, с него надо начинать последующие действия, если параметра нет, то по умолчанию ноль
calc.plus(100);
console.log(calc.value); // 110
calc.multiply(2);
console.log(calc.value); // 220
calc.divide(10); // 22
console.log(calc.value); // 22
calc.minus(10);
console.log(calc.value); // 12

const calcChain = new CalcChain(10); // 10 это начальное число, с него надо начинать последующие действия, если параметра нет, то по умолчанию ноль
console.log( calcChain.plus(100).multiply(2).divide(10) );
console.log(calcChain.value); // 22

const arr = [1,2,3,4,5];
const arrNew = arr.duplicator();
console.log(arrNew);

