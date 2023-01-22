// Завдання 2

document.getElementById('secret').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black';
    event.target.innerHTML = 'Хочеш знати який ?'
})

document.getElementById('secret').addEventListener('mousedown', function () {
    event.target.style.backgroundColor = 'gray';
    event.target.style.color = 'white';
    event.target.innerHTML = 'А я тобі не скажу!'
})

document.getElementById('secret').addEventListener('mouseup', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black';
    event.target.innerHTML = 'Хочеш знати який ?'
})

document.getElementById('secret').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'rgb(128, 9, 128)';
    event.target.style.color = 'white';
    event.target.innerHTML = 'У мене є секрет!'
})