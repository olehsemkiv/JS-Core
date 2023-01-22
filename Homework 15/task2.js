// let btn = document.querySelector('.add_btn');
// let form = document.forms.f1;
// let formTask = document.forms.f2;
// let btnHide = document.querySelector('.btn-hide');
// let errorWindow = document.querySelector('.error_block');
// // console.log(errorWindow);




// btn.addEventListener('click', () => {
//     if (form.task.value == '') {
//         errorWindow.style.display = 'block';
//         document.querySelector('.text-error_block').innerHTML = 'Поле не може бути пустим!';
//     } else {
//         let elem = document.createElement("label");

//         let elem_check = document.createElement("input");
//         let text = document.createElement("h4");
//         elem.className = 'label-item';
//         elem_check.type = 'checkbox';
//         text.innerHTML = form.task.value;
//         elem.appendChild(elem_check);
//         elem.appendChild(text);
//         form.task.value = '';
//         formTask.appendChild(elem);
//         // console.log(elem);

//     }
// })

// formTask.addEventListener('click', function () {
//     if (formTask.length > 1) {
//         event.target.parentElement.remove();
//     } else {

//         errorWindow.style.display = 'block';
//         document.querySelector('.text-error_block').innerHTML = 'Останній пункт видалити неможна!';
//         event.target.checked = false;
//     }
// })

// btnHide.addEventListener('click', function () {
//     errorWindow.style.display = 'none';
// })

// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

let btn = document.querySelector('.add_btn');
let form = document.forms.f1;
let formTask = document.forms.f2;
let btnHide = document.querySelector('.btn-hide');
let errorWindow = document.querySelector('.error_block');
// console.log(errorWindow);




btn.addEventListener('click', () => {
    if (form.task.value == '') {
        errorWindow.style.display = 'block';
        document.querySelector('.text-error_block').innerHTML = 'Поле не може бути пустим!';
    } else {
        let elem = document.createElement("label");
        let elem_check = document.createElement("input");
        let text = document.createElement("h4");
        elem_check.className = 'label-item';
        text.className = 'label-item';
        elem_check.type = 'checkbox';
        text.innerHTML = form.task.value;
        elem.appendChild(elem_check);
        elem.appendChild(text);
        form.task.value = '';
        formTask.appendChild(elem);
        // console.log(elem);

    }
})

formTask.addEventListener('click', function () {
    if (event.target.className == 'label-item') {
        if (formTask.length > 1) {
            event.target.parentElement.remove();
        } else {

            errorWindow.style.display = 'block';
            document.querySelector('.text-error_block').innerHTML = 'Останній пункт видалити неможна!';
            event.target.checked = false;
        }
    }
})

btnHide.addEventListener('click', function () {
    errorWindow.style.display = 'none';
})