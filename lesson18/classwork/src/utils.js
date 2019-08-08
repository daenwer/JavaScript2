// проверка на число
// проврека на четное число
// проверка на положительное число
// проврека на целое число
// проверка на простое число
// функция которое находит число в массиве строк

function isNumber(number) {return !isNaN(+number)}

function isEven(number) {
    if (+number === 0) {
        return NaN
    } else if (+number % 2) {
        return false
    } else {
        return true
    }
}

function isPositiveNumber(number) {
    if (+number > 0) {
        return true
    } else {
        return false
    }
}

function isInteger(number) {return (+number) === Math.floor(+number)}

function isPrimeNumber(number) {
    for (let i=2; i < +number - 1; i++) {
        if (+number % i === 0) {
            return false
        } else {
            return true
        }
    }
}

