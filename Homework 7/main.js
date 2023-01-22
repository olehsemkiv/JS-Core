// // Завдання 1
// let person = {
//     firstName: 'Ivan',
//     secondName: 'Ivanov',
//     showDate() {
//         console.log(`Імя ${this.firstName} Прізвище ${this.secondName}`)
//     }
// }

// // console.log(person);
// // // console.log(person.firstName);
// // // console.log(person.secondName);
// // // console.log(person.showDate);
// // person.showDate();

// let newPerson = {};

// for (const key in person) {
//     newPerson[key] = person[key];
// }


// newPerson.firstName = 'Petro';
// newPerson.secondName = 'Petriv';

// // console.log(`person`, person);
// // console.log(`NewPerson`, newPerson);

// person.showDate();
// newPerson.showDate();

// Завдання 2

let myMath = {
    sum() {

        console.log('sum = ', this.a + this.b)
    },
    multiplication() {
        console.log('multiplication = ', this.a * this.b)
    },
    division() {
        console.log('division = ', this.a / this.b)
    },
    subtraction() {
        console.log('subtraction = ', this.a - this.b)
    }

};

myMath.a = 5;
myMath.b = 2;

// console.log(myMath);
myMath.sum();
myMath.division();
myMath.multiplication();
myMath.subtraction();