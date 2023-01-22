// Завдання 3

document.getElementById('item-first').addEventListener('click', function () {
    let a1 = prompt('Введіть посилання на фото');
    document.getElementById('item-first').style.backgroundImage = `url(${a1})`;
})
document.getElementById('item-second').addEventListener('click', function () {
    let a2 = prompt('Введіть посилання на фото');
    document.getElementById('item-second').style.backgroundImage = `url(${a2})`;
})
document.getElementById('item-third').addEventListener('click', function () {
    let a3 = prompt('Введіть посилання на фото');
    document.getElementById('item-third').style.backgroundImage = `url(${a3})`;
})