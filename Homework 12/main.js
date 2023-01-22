// function mouseOverDiv1() {

//     event.target.style.backgroundColor = 'red';
//     document.getElementById('block').addEventListener('mouseout', mouseOverDiv2);
//     document.getElementById('block').addEventListener('mouseover', mouseOverDiv3);
// }



// function mouseOverDiv2() {
//     event.target.style.backgroundColor = 'violet';
// }

// function mouseOverDiv3() {
//     event.target.style.backgroundColor = 'yellow';
//     document.getElementById('block').addEventListener('mouseover', mouseOverDiv4);

// }

// function mouseOverDiv4() {
//     event.target.style.backgroundColor = 'green';
//     document.getElementById('block').addEventListener('mouseout', mouseOverDiv5);
// }

// function mouseOverDiv5() {

//     document.getElementById('block').addEventListener('mouseover', mouseOverDiv1);
// }


// document.getElementById('block').addEventListener('mouseover', mouseOverDiv1);

// document.getElementById('block').addEventListener('mouseover', mouseOverDiv3);

// document.getElementById('block').addEventListener('mouseover', function () {
//     event.target.style.backgroundColor = 'red';
//     document.getElementById('block').addEventListener('mouseout', function () {
//         event.target.style.backgroundColor = 'violet';
//         document.getElementById('block').addEventListener('mouseover', function () {
//             event.target.style.backgroundColor = 'yellow';
//             document.getElementById('block').addEventListener('mouseout', function () {
//                 event.target.style.backgroundColor = 'violet';
//                 document.getElementById('block').addEventListener('mouseover', function () {
//                     event.target.style.backgroundColor = 'green';
//                 })
//             })
//         })
//     })
// })



// function colorDiv() {
//     document.getElementById('block').addEventListener('mouseover', function () {
//         event.target.style.backgroundColor = 'red';
//         document.getElementById('block').addEventListener('mouseout', function () {
//             event.target.style.backgroundColor = 'violet';
//             document.getElementById('block').addEventListener('mouseover', function () {
//                 event.target.style.backgroundColor = 'yellow';
//                 document.getElementById('block').addEventListener('mouseout', function () {
//                     event.target.style.backgroundColor = 'violet';
//                     document.getElementById('block').addEventListener('mouseover', function () {
//                         event.target.style.backgroundColor = 'green';
//                         // document.getElementById('block').addEventListener('mouseout', colorDiv)
//                     })
//                 })
//             })
//         })
//     })

// }
// document.getElementById('block').addEventListener('mouseover', colorDiv);





// let arrColor = ['red', 'yellow', 'green'];


const element = document.getElementById('block');
let count = 0;

element.addEventListener('mouseover', function () {
    // count++;
    if (count == 0) {
        element.style.backgroundColor = 'red';
        count++;
    } else if (count == 1) {
        element.style.backgroundColor = 'yellow';
        count++;
    } else if (count == 2) {
        element.style.backgroundColor = 'green';
        count = 0;
    }
})

element.addEventListener('mouseout', function () {
    element.style.backgroundColor = 'violet';
})