$(document).ready(function () {

    let str = '';
    str += ($('span#s1').html()) + ($('b.s2').html()) + ($('#second i')).html() + ($('q[title="hello"]')).html() + ($('a[target="_blank"]')).html() + ($('span.extra:eq(1)')).html();
    console.log(($('span#s1').html()));
    console.log(($('b.s2').html()));
    console.log(($('#second i')).html());
    console.log(($('q[title="hello"]')).html());
    console.log(($('a[target="_blank"]')).html());
    console.log(($('span.extra:eq(1)')).html());
    alert(str);

})