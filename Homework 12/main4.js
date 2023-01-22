function addColor() {
    if (event.target.className == 'li-item') {
        event.target.style.color = event.target.innerHTML;
    }
}