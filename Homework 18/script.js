let firstNameReg = /^[a-zA-Z]{1,20}$/;
let lastNameReg = /^[a-zA-Z]{1,20}$/;
let emailReg = /^\w+@\w+\.\w+$/;
let passReg = /^\w{8,15}$/
let inputFname = document.querySelector('.input-text-fname');
let inputLname = document.querySelector('.input-text-lname');
let inputEmail = document.querySelector('.input-text-email');
let inputPass = document.querySelector('.input-text-pass');

let singBtn = document.querySelector('.btn_sing_up');
let windowM = document.querySelector('.confirm_window');

// Функція для поля FirstName
document.querySelector('.input-text-fname').addEventListener('input', () => {
    let tetsFname = firstNameReg.test(inputFname.value)
    if (tetsFname) {
        inputFname.style.outline = '3px solid green';
        document.querySelector('.error_window_fname').style.display = 'none';
        document.querySelector('.check_fname').style.display = 'block';
        document.querySelector('.uncheck_fname').style.display = 'none';
    } else {
        inputFname.style.outline = '3px solid red';
        document.querySelector('.error_window_fname').style.display = 'flex';
        document.querySelector('.check_fname').style.display = 'none';
        document.querySelector('.uncheck_fname').style.display = 'block';
    }
})

// Функція для поля Last Name
document.querySelector('.input-text-lname').addEventListener('input', () => {
    let tetsLname = lastNameReg.test(inputLname.value)
    if (tetsLname) {
        inputLname.style.outline = '3px solid green';
        document.querySelector('.error_window_lname').style.display = 'none';
        document.querySelector('.check_lname').style.display = 'block';
        document.querySelector('.uncheck_lname').style.display = 'none';
    } else {
        inputLname.style.outline = '3px solid red';
        document.querySelector('.error_window_lname').style.display = 'flex';
        document.querySelector('.check_lname').style.display = 'none';
        document.querySelector('.uncheck_lname').style.display = 'block';
    }
})

// Функція для поля email
document.querySelector('.input-text-email').addEventListener('input', () => {
    let tetsEmail = emailReg.test(inputEmail.value)
    if (tetsEmail) {
        inputEmail.style.outline = '3px solid green';
        document.querySelector('.error_window_email').style.display = 'none';
        document.querySelector('.check_email').style.display = 'block';
        document.querySelector('.uncheck_email').style.display = 'none';
    } else {
        inputEmail.style.outline = '3px solid red';
        document.querySelector('.error_window_email').style.display = 'flex';
        document.querySelector('.check_email').style.display = 'none';
        document.querySelector('.uncheck_email').style.display = 'block';
    }
})

// Функція для поля Password
document.querySelector('.input-text-pass').addEventListener('input', () => {
    let tetsPass = passReg.test(inputPass.value)
    if (tetsPass) {
        inputPass.style.outline = '3px solid green';
        document.querySelector('.error_window_pass').style.display = 'none';
        document.querySelector('.check_pass').style.display = 'block';
        document.querySelector('.uncheck_pass').style.display = 'none';
    } else {
        inputPass.style.outline = '3px solid red';
        document.querySelector('.error_window_pass').style.display = 'flex';
        document.querySelector('.check_pass').style.display = 'none';
        document.querySelector('.uncheck_pass').style.display = 'block';
    }
})

document.querySelector('.check_box').addEventListener('click', () => {
    if (firstNameReg.test(inputFname.value) == true && lastNameReg.test(inputLname.value) == true && emailReg.test(inputEmail.value) == true && passReg.test(inputPass.value) == true) {
        singBtn.disabled = false;
    }
})



singBtn.addEventListener('click', () => {
    windowM.style.display = 'block';
})

document.querySelector('.star_btn').addEventListener('click', () => {
    windowM.style.display = 'none';
    inputFname.value = '';
    inputFname.style.outline = '1px solid gray'
    inputLname.value = '';
    inputLname.style.outline = '1px solid gray'
    inputEmail.value = '';
    inputEmail.style.outline = '1px solid gray'
    inputPass.value = '';
    inputPass.style.outline = '1px solid gray'
    singBtn.disabled = true;
    document.querySelector('.check_input').checked = false;
    document.querySelector('.check_pass').style.display = 'none';
    document.querySelector('.check_email').style.display = 'none';
    document.querySelector('.check_fname').style.display = 'none';
    document.querySelector('.check_lname').style.display = 'none';
})