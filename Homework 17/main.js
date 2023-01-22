// Task 1

let arr = [5, 6, 7, 8, 9];
let sum = 0;
arr.forEach(element => {
    sum += element;
});

console.log(sum);

// Task 2

// let arr = [5, 6, 7, 8, 9];
// let newArr = arr.map(elem => Math.pow(elem, 2));
// console.log(newArr);

// Task 3

// let arr = [{
// 		name: 'Ivan',
// 		country: 'Ukraine'
// 	},

// 	{
// 		name: 'Petro',
// 		country: 'Ukraine'
// 	},

// 	{
// 		name: 'Miguel',
// 		country: 'Cuba'
// 	}
// ]

// let newArr = arr.every(elem => elem.country.toLocaleLowerCase() == 'ukraine');
// console.log(newArr);

// Task 4

// let arr = [{
//         name: 'Ivan',
//         country: 'Ukraine'
//     },

//     {
//         name: 'Petro',
//         country: 'Ukraine'
//     },

//     {
//         name: 'Miguel',
//         country: 'Cuba'
//     }

// ]

// const check = arr.some(elem => elem.country.toLocaleLowerCase() ==='cuba');
// console.log(check);

// Task 5

// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// let newArr = arr.filter(elem => typeof elem == "object")
// console.log(newArr);



// Task 6

// let arr = [1, 2, 3, 3, 0, 4, 5, 6];
// let answer = 0;
// let result = arr.reduce((sum, elem) => {
// 	if (elem == 0) {
// 		answer = sum;
// 	} else {
// 		return sum + elem;
// 	}
// });
// console.log(answer);

// ////////////////////////////////

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let num = 0;
// let result = arr.reduce((sum, elem) => {
// 	if (sum > 10) {
// 		return num;
// 	} else {
// 		num++;
// 		return sum + elem;
// 	}
// });

// console.log(result);

// Task 7

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// let arrTemp = arr.filter(elem => {
// 	return elem > 0;
// });
// let result = arrTemp.map(elem => {
// 	return Math.sqrt(elem);
// });
// console.log(result);