$(function () {
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    })

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    })

    $('.mainSlide').slick({
        arrows: false
    })
})