let formTask = document.forms.formTask;

document.querySelector('.btn-move').addEventListener('click', () => {
    // formTask.secondInput.value = formTask.firstInput.value;
    // formTask.firstInput.value = '';
    // if (formTask.firstInput.value == '') {
    //     console.log('pzdc');
    // }
    if (formTask.firstInput.value == '') {
        formTask.firstInput.value;
    } else {
        formTask.secondInput.value = formTask.firstInput.value;
        formTask.firstInput.value = '';
    }
})

formTask.place.addEventListener('blur', () => {
    // console.log('blur');
    formTask.place.placeholder = formTask.place.value;
    formTask.place.value = '';
})
formTask.place.addEventListener('focus', () => {

})