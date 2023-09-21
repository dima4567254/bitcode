
const slider = new Swiper('.slider', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
    },
});

$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$('.menu__btn, .menu a').on('click', function () {
    $('.menu__btn, .menu__mobile').toggleClass('active');
    // для крестика и для меню и что бы закрывалось меню после выбора сcылки
});

$('.offer__item--1').on('click', function () {
    $('.offer__items--1').slideToggle();
});
$('.offer__item--2').on('click', function () {
    $('.offer__items--2').slideToggle();
});
$('.offer__item--3 ').on('click', function () {
    $('.offer__items--3').slideToggle();
});

