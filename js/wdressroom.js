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

    $('.mainProduct .inner .tab>.pro_sd').slick({
        slidesToShow: 3,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: true,
    });

    $('.mainProduct .pro_gnb li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainProduct .inner .tab>.pro_sd').eq(idx).addClass('on').siblings().removeClass('on');
    })
})