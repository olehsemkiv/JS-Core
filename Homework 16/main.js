setInterval(() => {
    let dd = new Date();
    let day = dd.getDate();
    let month = dd.getMonth() + 1;
    let year = dd.getFullYear();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    document.querySelector('.date').innerHTML = `${day} - ${month } - ${year}`
})
setInterval(() => {
    let tt = new Date();
    let hh = tt.getHours();
    let mm = tt.getMinutes();
    let ss = tt.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.time').innerHTML = `${hh} : ${mm } : ${ss}`
})


let hour = document.querySelector('.stop-watch_h');
let min = document.querySelector('.stop-watch_m');
let sec = document.querySelector('.stop-watch_s');
let null_hour = 0;
let null_min = 0;
let null_sec = 0;

document.querySelector('.stopwatch-stop').disabled = true;


function stopwatch() {
    stopwatchID = setInterval(() => {
        hour.innerHTML = null_hour;
        min.innerHTML = null_min;
        sec.innerHTML = null_sec;

        null_sec++;
        if (null_sec >= 60) {
            null_min++;
            null_sec = 0;
        }
        if (null_min >= 60) {
            null_hour++
            null_min = 0;
        } else if (null_hour >= 24) {
            null_hour = 0;
        }
        if (null_sec <= 10) {
            sec.innerHTML = '0' + sec.innerHTML;
        }
        if (null_min <= 10) {
            min.innerHTML = '0' + min.innerHTML;
        }
        if (null_hour <= 10) {
            hour.innerHTML = '0' + hour.innerHTML;
        }
    }, 1000);
    document.querySelector('.stopwatch-start').disabled = true;
    document.querySelector('.stopwatch-stop').disabled = false;
}

document.querySelector('.stopwatch-start').addEventListener('click', stopwatch);
document.querySelector('.stopwatch-stop').addEventListener('click', function () {
    clearInterval(stopwatchID);
    document.querySelector('.stopwatch-start').disabled = false;
    document.querySelector('.stopwatch-stop').disabled = true;

});
document.querySelector('.stopwatch-loop').addEventListener('click', () => {
    document.querySelector('.stopwatch_right').innerHTML += `<div> ${document.querySelector('.stopwatch-block').innerHTML} </div>`;
})
document.querySelector('.stopwatch-reset').addEventListener('click', () => {
    document.querySelector('.stopwatch_right').innerHTML = "";
    clearInterval(stopwatchID);
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    null_hour = 0;
    null_min = 0;
    null_sec = 0;
    document.querySelector('.stopwatch-start').disabled = false;
    document.querySelector('.stopwatch-stop').disabled = true;
})
let countM = 25;
document.querySelector('.timer').addEventListener('click', () => {
    if (event.target.classList == 'add-m') {
        countM++;
        document.querySelector('.count_m').innerHTML = countM;
    } else if (event.target.classList == 'remove-m') {
        countM--;
        document.querySelector('.count_m').innerHTML = countM;

    }
    if (countM <= 1) {
        document.querySelector('.remove-m').disabled = true;
    }
    if (countM > 1) {
        document.querySelector('.remove-m').disabled = false;
    }
})


let timer_min = document.querySelector('.timer_min');
let timer_sec = document.querySelector('.timer_sec');
let countTimer = document.querySelector('.count_m');
let check = false;
document.querySelector('.stop-timer').disabled = true;
document.querySelector('.main_btn_timer').addEventListener('click', () => {
    if (event.target.classList == 'start-timer') {
        document.querySelector('.start-timer').disabled = true;
        document.querySelector('.stop-timer').disabled = false;
        if (check == false) {
            timer_min.innerHTML = countTimer.innerHTML;
            timer_min.innerHTML -= 1;
            timer_sec.innerHTML = 59;
        } else if (check == true) {

            timer_min.innerHTML = timer_min.innerHTML;
            timer_sec.innerHTML = timer_sec.innerHTML;
        }
        // if (timer_min.innerHTML <= 10) {
        //     timer_min.innerHTML = '0' + timer_min.innerHTML;
        // }

        timerID = setInterval(() => {
            timer_sec.innerHTML --;
            if (timer_sec.innerHTML <= 0) {
                timer_min.innerHTML--;
                timer_sec.innerHTML = 59;
            }
            if (timer_sec.innerHTML < 10) {
                timer_sec.innerHTML = '0' + timer_sec.innerHTML;
            }
            if (timer_min.innerHTML <= -1){
                timer_min.innerHTML = 'Time';
                timer_sec.innerHTML = 'Over!';
                clearInterval(timerID);
            }



        }, 1000);
    } else if (event.target.classList == 'stop-timer') {
        document.querySelector('.stop-timer').disabled = true;
        document.querySelector('.start-timer').disabled = false;
        clearInterval(timerID);
        check = true;
    } else if (event.target.classList == 'reset-timer') {
        clearInterval(timerID);
        countTimer.innerHTML = '25';
        timer_min.innerHTML = '00';
        timer_sec.innerHTML = '00';
        check = false;
        document.querySelector('.stop-timer').disabled = true;
        document.querySelector('.start-timer').disabled = false;
    }
})