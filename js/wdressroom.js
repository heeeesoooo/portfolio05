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
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('.pro_sd').slick({
        slidesToShow: 3,
        arrows: false,
        // infinite: true,
        // fade: true,
        // cssEase: 'linear',
        // arrows: true,
    });

    $('.mainProduct .pro_gnb li').on('click', function () {
        var idx = $(this).index();
        $('.mainProduct .tab>.pro_sd').removeClass('on');
        $('.mainProduct .tab>.pro_sd').eq(idx).addClass('on');

        $('.mainProduct .pro_gnb>li').removeClass('on');
        $(this).addClass('on');
    })

    $('.mainProduct .tab>.pro_sd').eq(0).slick('slickPlay');
    $('.mainProduct .pro_gnb li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainProduct .tab>.pro_sd').eq(idx).addClass('on').siblings().removeClass('on');
        $('.mainProduct .tab>.pro_sd').slick('slickPause');
        $('.mainProduct .tab>.pro_sd').eq(idx).slick('slickPlay');
    })
})