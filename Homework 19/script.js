let login = document.querySelector('.log');
let password = document.querySelector('.pass');
let email = document.querySelector('.email');
let arr = [];
let btn_add = document.querySelector('.btn_add');
let btn_editUser = document.querySelector('.btn_edit_user');
let userIndex;
let loginReg = /^[a-zA-Z]{4,16}$/;
let emailReg = /^\w+@\w+\.\w+$/;
let passReg = /^[\w-.]{4,16}$/;
let checkLog;
let checkPass;
let checkEmail;
login.addEventListener('input', () => {
    let strLog = loginReg.test(login.value);
    if (strLog) {
        login.style.border = '3px solid green';
        checkLog = true;
    } else {
        login.style.border = '3px solid red';
    }
})
password.addEventListener('input', () => {
    let strPass = passReg.test(password.value);
    if (strPass) {
        password.style.border = '3px solid green';
        checkPass = true;
    } else {
        password.style.border = '3px solid red';
    }
})
email.addEventListener('input', () => {
    let strEmail = emailReg.test(email.value);
    if (strEmail) {
        email.style.border = '3px solid green';
        checkEmail = true;
    } else {
        email.style.border = '3px solid red';
    }
})



function addUser() {
    if (checkLog & checkPass & checkEmail) {
        console.log('vse zbs');
        let newObject = {
            loginItem: login.value,
            passwordItem: password.value,
            emailItem: email.value
        }
        arr.push(newObject);
        login.value = '';
        password.value = '';
        email.value = '';
        login.style.border = '1px solid gray';
        password.style.border = '1px solid gray';
        email.style.border = '1px solid gray';
        checkLog = false;
        checkPass = false;
        checkEmail = false;
        render();
    } else {
        alert('Введіть парвильно дані');
    }

}


function render() {
    document.querySelector('.table').innerHTML = '';
    document.querySelector('.table').innerHTML += `
    <tr>
                    <th>#</th>
                    <th>Login</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
    </tr>
    `
    for (let i = 0; i < arr.length; i++) {
        document.querySelector('.table').innerHTML += `
        <tr>
                    <td class="number">${i+1}</td>
                    <td>${arr[i].loginItem}</td>
                    <td>${arr[i].passwordItem}</td>
                    <td>${arr[i].emailItem}</td>
                    <td><button class='edit_btn'>Edit</button></td>
                    <td><button class='delete_btn'>Delete</button></td>
        </tr>
        `
    }
}

function editUser() {
    let objectEdit = {
        loginItem: login.value,
        passwordItem: password.value,
        emailItem: email.value
    };
    arr[userIndex] = objectEdit;
    login.value = '';
    password.value = '';
    email.value = '';
    login.style.border = '1px solid gray';
    password.style.border = '1px solid gray';
    email.style.border = '1px solid gray';
    btn_editUser.classList.remove('active');
    btn_add.classList.remove('no_active');
    render();
}
btn_add.addEventListener('click', addUser);

document.querySelector('.right_block').addEventListener('click', () => {
    if (event.target.classList == 'delete_btn') {
        arr.splice(event.path[2].firstElementChild.innerHTML - 1, 1);
        render();
    }
    if (event.target.classList == 'edit_btn') {
        login.value = arr[event.path[2].firstElementChild.innerHTML - 1].loginItem;
        password.value = arr[event.path[2].firstElementChild.innerHTML - 1].passwordItem
        email.value = arr[event.path[2].firstElementChild.innerHTML - 1].emailItem
        userIndex = event.path[2].firstElementChild.innerHTML - 1;
        btn_editUser.classList.add('active');
        btn_add.classList.add('no_active');
    }
});

btn_editUser.addEventListener('click', editUser);