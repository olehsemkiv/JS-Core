// Task 1

// let arrCopy = function (...array) {
//     let newArr = array.slice();
//     return newArr;
// }

// let arr1 = arrCopy(1, 2, 3, 4, 6, 7, 8);
// arr1[0] = 18;
// arr1[3] = 'JS';
// console.log(arr1);

// Task 2

// let arrToString = function (...array) {

//     let str = '';
//     for (const index in array) {
//         array[index] += str;
//     }
//     return array;
// }

// // console.log(arrToString(1, 2, 3, 4, 5, 6, 78));
// let arr2 = arrToString(1, 2, 15, 4, 5, 6, 78);
// console.log(arr2);

// Task 3

// let getLength = function (...array) {
//     let newArr = [];
//     for (const index in array) {
//         newArr.push(array[index].length);
//     }
//     return newArr;
// }


// let arr3 = getLength('oleg', 'Roman', 'Bogdan', 'Yaroslav');
// console.log(arr3);

// Tsk 4

let removeDuplicates = function (...array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) == -1) newArray.push(array[i])
    }
    return newArray;
}

let arr5 = removeDuplicates('html', 'js', 'css', 'js', 'css', 'scss', 'html');
console.log(arr5);