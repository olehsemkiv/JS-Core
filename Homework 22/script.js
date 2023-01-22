$(document).ready(function () {
    const position = ['0 0', '-100px 0', '-200px 0', '-300px 0', '0 -100px', '-100px -100px', '-200px -100px', '-300px -100px', '0 -200px', '-100px -200px', '-200px -200px', '-300px -200px', '0 -300px', '-100px -300px', '-200px -300px', '-300px -300px'];
    const random = arr => arr.sort(() => 0.5 - Math.random())

    let newArr = random(position);
    for (let i = 0; i < $('.left_elem').length; i++) {
        $('.left_elem').eq(i).css({
            backgroundPosition: `${newArr[i]}`,
        });


        if (newArr[i] == '0 0') {
            $('.left_elem').eq(i).attr('data-id', '1');
        }
        if (newArr[i] == '-100px 0') {
            $('.left_elem').eq(i).attr('data-id', '2');
        }
        if (newArr[i] == '-200px 0') {
            $('.left_elem').eq(i).attr('data-id', '3');
        }
        if (newArr[i] == '-300px 0') {
            $('.left_elem').eq(i).attr('data-id', '4');
        }
        if (newArr[i] == '0 -100px') {
            $('.left_elem').eq(i).attr('data-id', '5');
        }
        if (newArr[i] == '-100px -100px') {
            $('.left_elem').eq(i).attr('data-id', '6');
        }
        if (newArr[i] == '-200px -100px') {
            $('.left_elem').eq(i).attr('data-id', '7');
        }
        if (newArr[i] == '-300px -100px') {
            $('.left_elem').eq(i).attr('data-id', '8');
        }
        if (newArr[i] == '0 -200px') {
            $('.left_elem').eq(i).attr('data-id', '9');
        }
        if (newArr[i] == '-100px -200px') {
            $('.left_elem').eq(i).attr('data-id', '10');
        }
        if (newArr[i] == '-200px -200px') {
            $('.left_elem').eq(i).attr('data-id', '11');
        }
        if (newArr[i] == '-300px -200px') {
            $('.left_elem').eq(i).attr('data-id', '12');
        }
        if (newArr[i] == '0 -300px') {
            $('.left_elem').eq(i).attr('data-id', '13');
        }
        if (newArr[i] == '-100px -300px') {
            $('.left_elem').eq(i).attr('data-id', '14');
        }
        if (newArr[i] == '-200px -300px') {
            $('.left_elem').eq(i).attr('data-id', '15');
        }
        if (newArr[i] == '-300px -300px') {
            $('.left_elem').eq(i).attr('data-id', '16');
        }
    }
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let check = true;
    let nullS = 59;
    $('.close').click(() => {
        $('.modal').css({
            display: 'none'
        })
        $('.modal_bg').css({
            display: 'none'
        })
    })
    $('.start').click(function () {
        $('.left_elem').draggable({
            containment: '.game_area'
        });
        $('.right_elem').droppable({
            accept: '.left_elem',
            drop: function (event, ui) {
                let draggableElement = ui.draggable;
                let droppedOn = $(this);
                draggableElement.css({
                    position: 'relative',
                    top: '0',
                    left: '0'
                })
                draggableElement.appendTo(droppedOn);
            }
        });
        $('.check').prop('disabled', false);
        $('.start').prop('disabled', true);
        let timerID = setInterval(() => {
            $('.seconds').html(nullS);
            $('.minutes').html('00');
            nullS -= 1;
            if (nullS < 10) {
                $('.seconds').html(`0${nullS}`);
            }
            if (nullS <= 0) {
                $('.seconds').html('00');

                clearInterval(timerID);
                $('.modal').css({
                    display: 'flex'
                })
                $('.modal_bg').css({
                    display: 'block'
                })
                $('.modal_heading').html(`It's a pity, but you lost`)
                $('.check_total').css({
                    display: 'none'
                })
                $('.check').prop('disabled', true);
                $('.start').prop('disabled', false);
                nullS = 59;
                $('.minutes').html('01');
                $('.check').click(() => {
                    $('.modal').css({
                        display: 'flex'
                    })
                    $('.modal_bg').css({
                        display: 'block'
                    })
                    $('.modal_heading').html(`You still have time, you sure?`)
                    $('.check_total').css({
                        display: 'block'
                    })
                })
            }
        }, 1000)
        let sec = nullS + 1;
        $('.modal_heading').html(`You still have time, you sure?`)
        let modalInterval = setInterval(() => {
            sec--;
            console.log(sec);
            $('.modal_heading').html(`You still have time, you sure? ${sec}`)
            if (sec <= 0) {
                $('.modal_heading').html(`You still have time, you sure? `)
            }
        }, 1000)
        $('.check').click(() => {
            $('.modal').css({
                display: 'flex'
            })
            $('.modal_bg').css({
                display: 'block'
            })

            $('.check_total').css({
                display: 'block'
            })
        })
        $('.check_total').click(() => {
            clearInterval(timerID);
            clearInterval(modalInterval);
            $('.check').prop('disabled', true);
            $('.start').prop('disabled', false);
            for (let i = 0; i < $('.left_elem').length; i++) {
                if ($('.left_elem').eq(i).attr('data-id') != numbers[i]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                $('.modal_heading').html(`Woohoo, well done, you did it! 🥳🥳`)
            } else {
                $('.modal_heading').html(`It's a pity, but you lost 😞😞`)
            }

            check = true;
            $('.start').prop('disabled', true);
            $('.check_total').css({
                display: 'none'
            })
        })
    })
    $('.new').click(() => {
        window.location.reload();
    })
    let check_btn = true;
    $('.btn_help').click(() => {
        if (check_btn == true) {
            $('.help_window').animate({
                top: '20'
            })
            $('.help_heading').html(' ');
            check_btn = false;
        } else {
            $('.help_window').animate({
                top: '-259'
            })
            $('.help_heading').html('Need help ?');
            check_btn = true;
        }
    })
})