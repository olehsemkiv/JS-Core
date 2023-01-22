$(function () {
    $('.circle').click(function () {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let w = Math.round(Math.random() * (innerWidth / 4));
        let h = Math.round(Math.random() * (innerHeight / 4));
        let t = Math.round(Math.random() * (window.innerHeight - h));
        let l = Math.round(Math.random() * (window.innerWidth - w));
        $('.circle').animate({
            width: w,
            height: h,
            top: t,
            left: l,
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }, 3000, 'easeOutElastic')
    })
    setInterval(() => {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let rb = Math.round(Math.random() * 255);
        let gb = Math.round(Math.random() * 255);
        let bb = Math.round(Math.random() * 255);
        let t = Math.round(Math.random() * (window.innerHeight - $('.second_circle').innerHeight()));
        let l = Math.round(Math.random() * (window.innerWidth - $('.second_circle').innerWidth()));
        $('.second_circle').animate({
            top: t,
            left: l,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            borderColor: `rgb(${rb}, ${gb}, ${bb})`,
        }, 1000, 'easeInOutQuart')
        $('.second_circle').css('box-shadow', `4px 4px 50px 5px rgb(${r}, ${g}, ${b})`)
    }, 500)

    $('.box').each(function (ind, elem) {
        let modal = $('.modal');
        let check;
        $(elem).click(function () {
            if (ind == 0) {
                check = 1;
            } else if (ind == 1) {
                check = 2;
            } else if (ind == 2) {
                check = 3;
            } else if (ind == 3) {
                check = 4;
            } else if (ind == 4) {
                check = 5;
            }
            // console.log(ind, elem);
            console.log(check);

            $('.background').css({
                zIndex: 3,
                background: `rgba(0, 0, 0, 0.678)`
            })
            $(elem).css({
                opacity: 0
            })
            modal.css({
                display: 'block',
                top: $(elem).css('top'),
                left: $(elem).css('left'),
                width: '220',
                height: '220'
            })
            modal.animate({
                top: '50%',
                left: '33%',
                width: '400',
                height: '400',
                backgroundColor: $(elem).css('background-color')
            }, 500)
        })
        modal.click(function () {
            if (check == 1) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '10',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 2) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '240',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 3) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '470',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 4) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '700',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            } else if (check == 5) {
                modal.animate({
                    // display: 'none',
                    top: '10',
                    left: '930',
                    width: '220',
                    height: '220'
                }, function () {
                    $(elem).css({
                        opacity: 1
                    })
                    modal.css({
                        display: 'none'
                    })
                    $('.background').css({
                        zIndex: -1,
                        background: `rgba(255, 255, 255, 0.678)`
                    })
                })
                check = 0;
            }


            
            console.log(check);
        })


    })

    // $('.box').on('click', function () {
    //     let modal = $('.modal');

    //     $('.background').css({
    //         backgroundColor: 'rgba(0, 0, 0, 0.678)',
    //         zIndex: 3
    //     })
    //     $(this).css('opacity', '0')
    //     modal.css('top', $(this).css('top'));
    //     modal.css('left', $(this).css('left'));
    //     modal.css('width', $(this).css('width'));
    //     modal.css('height', $(this).css('height'));
    //     modal.css('background-color', $(this).css('background-color'));
    //     modal.css('display', 'block');
    //     modal.animate({
    //         top: '50%',
    //         left: '33%',
    //         width: '400',
    //         height: '400',
    //         backgroundColor: $(this).css('background-color')
    //     })
    //     modal.on('click', function () {
    //         $('.background').css({
    //             backgroundColor: 'rgba(255, 255, 255, 0.678)',
    //             zIndex: -1
    //         })
    //         modal.animate({
    //             top: $('.box').css('top'),
    //             left: $('.box').css('left'),
    //             width: $('.box').css('width'),
    //             height: $('.box').css('height'),

    //         }, function () {
    //             $('.box').css('opacity', '1')
    //         })
    //     })



    // })
})