$('.slider_project').slick({
    dots: true,
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            dots: true,
            breakpoint: 992,
            settings: {
            slidesToShow: 2
            }
        },
        {
            dots: true,
            breakpoint: 768,
            settings: {
            slidesToShow: 1
        }
        },
        {
            dots: true,
            breakpoint: 320,
            settings: {
            slidesToShow: 1
        }
      }
    ]
  });
