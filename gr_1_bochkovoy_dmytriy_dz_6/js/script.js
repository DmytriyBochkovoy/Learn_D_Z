$(document).ready(function() {
    $ ('.news_list').slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<img src='img/arrow_left.svg' class='slick-prev' alt='1'>",
        nextArrow: "<img src='img/arrow_right.svg' class='slick-next' alt='2'>",
    });
    $ ('.slider_specialists').slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<img src='img/arrow_left.svg' class='slick-prev' alt='1'>",
        nextArrow: "<img src='img/arrow_right.svg' class='slick-next' alt='2'>",
    });
});
