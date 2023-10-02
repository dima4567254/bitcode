
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

$('.offer__item--services').on('click', function () {
    $('.offer__items--services').slideToggle();
});
$('.offer__item--business').on('click', function () {
    $('.offer__items--business').slideToggle();
});
$('.offer__item--advice ').on('click', function () {
    $('.offer__items--advice').slideToggle();
});

