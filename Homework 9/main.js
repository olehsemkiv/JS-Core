// Task 1

// let a = +prompt('Введіть значення!');
// let res;
// let getArea = function (r) {
//     if (r === 0) {
//         return 'Будь ласка, введіть радіус!'
//     } else if (Number.isFinite(r)) {
//         res = (r ** 2) * Math.PI;
//         return `Площа дорівнює' ${res.toFixed(2)} 'квадратних одиниць.`;
//     } else if (Number.isFinite(r) == false) {
//         return 'Повинно бути числове значення!';
//     }
// }

// console.log(getArea(a));

// Task 2

// let a = +prompt(`Введіть значення`);

// let getSqrt = function (n) {
//     if (n < 0) {
//         return 'Введіть додатнє число';
//     } else if (n === 0) {
//         return 'Будь ласка, введіть число!!'
//     } else if (Number.isFinite(n)) {
//         return Math.sqrt(n);
//     } else if (Number.isFinite(n) == false) {
//         return 'Повинно бути числове значення!';
//     }
// }

// console.log(getSqrt(a));

// Task 3

let c = +prompt(`Введіть число: для MyMath (pow)`);
let d = +prompt(`Введіть степінь для MyMath (pow)`);
let f = +prompt(`Введіть число для MyMath (abs)`);


let myMath = {
    PI() {
        return `PI = ${3.141592653589793238462643}`
    },
    pow(numPow, deegre) {
        let result = 1;
        if (numPow === 0) {
            return 'Будь ласка, введіть число!!'
        } else if (Number.isFinite(numPow) && Number.isFinite(deegre)) {
            for (let i = 1; i <= deegre || i <= -deegre; i++) {
                result *= numPow;
            }
            if (deegre < 0) {
                result = 1 / result;
            } else if (deegre = 0) {
                result = 1;
            }
            return result;
        } else if (Number.isFinite(numPow) == false || Number.isFinite(deegre) == false) {
            return 'Повинно бути числове значення!';
        }
    },
    abs(a) {
        if (a === 0) {
            return 'Будь ласка, введіть число!!'
        } else if (Number.isFinite(a)) {
            if (a > 0) {
                return a
            } else if (a < 0) {
                return a *= -1;
            }
        } else if (Number.isFinite(a) == false) {
            return 'Повинно бути числове значення!';
        }
    },
    max(...array) {
        let maxel = array[0];
        for (let i = 1; i < array.length; i++) {
            if (Number.isFinite(array[i])) {
                if (array[i] > maxel) {
                    maxel = array[i];
                }
            } else if (Number.isFinite(array[i]) == false) {
                return 'Повинно бути числове значення!';
            }
        }

        return (`Максимальне число ${maxel}`)
    },
    min(...array) {
        let minel = array[0];
        for (let i = 1; i < array.length; i++) {
            if (Number.isFinite(array[i])) {
                if (array[i] < minel) {
                    minel = array[i];
                }
            } else if (Number.isFinite(array[i]) == false) {
                return 'Повинно бути числове значення!';
            }
        }

        return (`Мінімальне число ${minel}`)
    },

}

console.log(myMath.PI());
console.log(myMath.pow(c, d));
console.log(myMath.abs(f));
console.log(myMath.max(-5, 5, 6, 100));
console.log(myMath.min(-5, 'fvsdfsdf', 6));
