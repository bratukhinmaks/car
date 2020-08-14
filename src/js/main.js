// $("span .slider .round").click(function () {
//     $(".main-background").toggleClass("main-background-night")
// });

$('.navbar__hamburger').click(e => {
    $('.navbar__right-side').toggleClass('navbar__right-side--visible');
    $('.navbar__hamburger').toggleClass('navbar__hamburger--close');
});



document.querySelectorAll('.navbar__item').forEach(item => {
    item.addEventListener('click', e => {
        document.querySelector('.navbar__right-side').classList.remove('navbar__right-side--visible');
        document.querySelector('.navbar__hamburger').classList.remove('navbar__hamburger--close');
    })
});

$(document).ready(function(){
    $('.brand_slider__container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
});
    $('.feature-slider-items').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots:true,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});





