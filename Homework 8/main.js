// Завдання 1

// let str = prompt('Введіть контент:');
// let res = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == ' '){
//         res++;
//     }
// }
// console.log(res, ' - пробілів.');

// Завдання 2

let email = prompt('Enter your EMAIL:');
let a = 0;
for (let i = 0; i < email.length; i++) {
    if (email.charAt(i) == '@') {
        if (email.charAt(0) == '@' || email.slice(-1) == "@") {
            console.log('Invalid email')
        } else {
            console.log('Your email has been saved!')
        }
    } else if (email.charAt(i) != '@') {
        a += 1;
    }
    if (a == email.length) {
        console.log('Invalid email')
    }
}

// Завдання 3

// let mess = prompt('Enter mess');
// let count = 0;
// let newMess = mess.split(" ");

// for (let i = 0; i < newMess.length; i++) {
//     if (newMess[i] == 'html') {
//         count++;
//     }
// }

// console.log(`Кількість слів html ${count}`);

// Завдання 4

// let str = prompt('Enter your website');

// if (str.substr(0, 7) == 'http://') {
//     console.log(str.slice(7));
// } else if (str.substr(0, 8) == 'https://') {
//     console.log(str.slice(8));
// }

// https://www.google.com
// http://www.w3schools.com