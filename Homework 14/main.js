let form = document.forms.form;



form.check.addEventListener('click', function () {
    if (form.check.checked) {
        document.querySelector('.btn').classList.add('active');
        document.querySelector('.btn').addEventListener('click', () => {
            if (form.firstName.value == '') {
                alert('Введіть дані коректно!')
            } else if (form.secondName.value == '') {
                alert('Введіть дані коректно!')
            } else if (form.email.value == '') {
                alert('Введіть дані коректно!')
            } else if (form.position.value == 'Choose...') {
                alert('Введіть дані коректно!')
            } else if (form.sex.value == false) {
                alert('Введіть дані коректно!')
            } else {
                document.querySelector('.wrapper').style.display = 'none';
                document.querySelector('.profile').style.display = 'flex';
                document.querySelector('.text_firstName').textContent = form.firstName.value;
                document.querySelector('.text_secondName').textContent = form.secondName.value;
                document.querySelector('.text_email').textContent = form.email.value;
                document.querySelector('.text_position').textContent = form.position.value;
                if (form.sex.value == 'man') {
                    document.querySelector('.img').style.backgroundImage = 'url(./images/man.webp)';
                } else if (form.sex.value == 'woman') {
                    document.querySelector('.img').style.backgroundImage = 'url(./images/woman.png)';
                }
            }

        })
    } else if (form.check.checked == false) {
        document.querySelector('.btn').classList.remove('active');
    }
})

document.querySelector('.btn_sing-out').addEventListener('click', function () {
    document.querySelector('.wrapper').style.display = 'block';
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.btn').classList.remove('active');
    form.reset();
})