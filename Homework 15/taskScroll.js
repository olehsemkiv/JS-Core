let scrollDown = document.querySelector('.scroll_down');
let firstBoxHeading = document.querySelector('.first_box-heading');
let lane = document.querySelector('.lane');
let firstBoxImg = document.querySelector('.first_box-img');
let scrollUp = document.querySelector('.scroll_up');
let a = 0.065;
window.addEventListener('scroll', (event) => {
    // console.log('scroll', window.scrollY);
    if (window.scrollY <= 300 && window.scrollY >= 100) {
        scrollDown.style.fontSize = `${window.scrollY/3}px`
    }
    if (window.scrollY >= 550 && window.scrollY <= 900) {
        firstBoxHeading.style.left = `${window.scrollY/10}px`
    }
    if (window.scrollY >= 550 && window.scrollY <= 900) {
        lane.style.width = `${window.scrollY/2}px`
    }
    if (window.scrollY >= 550) {
        firstBoxImg.style.right = `${window.scrollY/3}px`
    }
    if (window.scrollY >= 1150) {

        // console.log(window.scrollY)
        let a = 0.0005;
        let b = ((window.scrollY * a))*110;
        console.log(b);
        scrollUp.style.fontSize = ` ${111 - b}px`
        // console.log(` ${ - (window.scrollY * a)}px`);
        // console.log((window.scrollY * a)*20);

    }
})

scrollUp.addEventListener('click', () => {
    document.querySelector('.scroll_down_box').scrollIntoView({
        behavior: "smooth"

    })
})

scrollDown.addEventListener('click', () => {
    document.querySelector('.first_box').scrollIntoView({
        behavior: "smooth"

    })
})