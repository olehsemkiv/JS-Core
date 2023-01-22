let h_color = document.querySelector('.heading_color');
let h_image = document.querySelector('.heading_image');
let color_block = document.querySelector('.color_block');
let image_block = document.querySelector('.image_block');
let body_el = document.querySelector('body');
h_color.addEventListener('click', function (event) {
    image_block.classList.remove('display_flex');
    color_block.classList.toggle('display_flex');
})
h_image.addEventListener('click', function (event) {
    color_block.classList.remove('display_flex');
    image_block.classList.toggle('display_flex');
})

document.querySelector('.c_item-1').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-1');
})
document.querySelector('.c_item-2').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-2');
})
document.querySelector('.c_item-3').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-3');
})
document.querySelector('.c_item-4').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-4');
})
document.querySelector('.c_item-5').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-5');
})
document.querySelector('.c_item-6').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-6');
})
document.querySelector('.c_item-7').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-7');
})
document.querySelector('.c_item-8').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-8');
})
document.querySelector('.c_item-9').addEventListener('click', function (event) {

    body_el.classList.remove('c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9',
        'i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9');
    body_el.classList.add('c_item-9');
})

document.querySelector('.i_item-1').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-1');
})
document.querySelector('.i_item-2').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-2');
})
document.querySelector('.i_item-3').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-3');
})
document.querySelector('.i_item-4').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-4');
})
document.querySelector('.i_item-5').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-5');
})
document.querySelector('.i_item-6').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-6');
})
document.querySelector('.i_item-7').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-7');
})
document.querySelector('.i_item-8').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-8');
})
document.querySelector('.i_item-9').addEventListener('click', function (event) {

    body_el.classList.remove('i_item-1', 'i_item-2', 'i_item-3', 'i_item-4', 'i_item-5', 'i_item-6', 'i_item-7', 'i_item-8', 'i_item-9',
        'c_item-1', 'c_item-2', 'c_item-3', 'c_item-4', 'c_item-5', 'c_item-6', 'c_item-7', 'c_item-8', 'c_item-9');
    body_el.classList.add('i_item-9');
})