let backgroundPage = prompt('Введіть колір фону сторінки:');
let fontFamily = prompt('Введіть тип шрифта на сторінці: (наприклад monospace, arial)');
let headinPosition = prompt('Введіть вирівнювання заголовка: ');
let backgroundParagraph = prompt('Введіть фон для параграфа з посиланнями: ');
let textColor = prompt('Введіть колір тексту у параграфі з посиланнями і для самих посилань: ');
let textDivColor = prompt('Введіть колір тексту у елементі div: ');
let textDivfontSize = prompt('Введіть розмір тексту у елементі div: (вказуйте px!!!)');
let textDivfontWeight = prompt('Введіть товщину тексту у елементі div: ');
let typeMarker = prompt('Введіть тип маркера для маркованого списку на сторінці: ');
let website1 = prompt('Введіть 1 сайт: (наприклад football24.ua)');
let website2 = prompt('Введіть 2 сайт: (наприклад football24.ua)');
let website3 = prompt('Введіть 3 сайт: (наприклад football24.ua)');

let body = document.querySelector('body');
body.style.backgroundColor = backgroundPage;
body.style.fontFamily = fontFamily;
let heading = document.querySelector('h1');
heading.style.textAlign = headinPosition;
let paragraphA = document.querySelectorAll('p, a');
for (const elem of paragraphA) {
    elem.style.backgroundColor = backgroundParagraph;
}
let paragraphColor = document.querySelector('p');
paragraphColor.style.color = textColor;
let paragraphAColor = document.querySelectorAll('a');
for (const elemA of paragraphAColor) {
    elemA.style.color = textColor;
}

let divElement = document.querySelectorAll('h2, ul, li');
for (const elemDiv of divElement) {
    elemDiv.style.color = textDivColor;
    elemDiv.style.fontSize = textDivfontSize;
    elemDiv.style.fontWeight = textDivfontWeight;
}

let typeElem = document.querySelector('ul');
typeElem.style.listStyleType = typeMarker;

let web1 = document.getElementById('first');
let web2 = document.getElementById('second');
let web3 = document.getElementById('third');
web1.href = `http://${website1}`;
web1.textContent = website1;
web2.href = `http://${website2}`;
web2.textContent = website2;
web3.href = `http://${website3}`;
web3.textContent = website3;