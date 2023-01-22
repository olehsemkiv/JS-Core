$(document).ready(function () {
    $(".block").slideDown(5000, () => {
        $(".heading").html('1')
    }).slideUp(5000, () => {
        $(".heading").html('0')
    });
})