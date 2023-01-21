$(function name(params) {
// что бы текст выпадал
    $('.offer__item--1').on('click', function () {
        $('.offer__items--1').slideToggle();
    });
    $('.offer__item--2').on('click', function () {
        $('.offer__items--2').slideToggle();
    });
    $('.offer__item--3 ').on('click', function () {
        $('.offer__items--3').slideToggle();
    });

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    
    // var swiper = new Scwiper(".myswiper", {
    //     // !!!
    //     slidesPerView: 4,
    //     // spaceBetween: 30,
    //     loop: true,
    //     loopedslides: 2,

        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },

        // breakpoints: {

        //     1200: {
        //         slidesPerView: 4,
        //     },

        //     992: {
        //         slidesPerView: 3,


        //     },

        //     600: {
        //         slidesPerView: 2,
        //     },

        //     320: {
        //         slidesPerView: 1,
        //     },
        // },
    // });

    // let showModal = document.querySelector('#item');
    // let hideModal = document.querySelector('#modal-hide');
    // // при клике
    // function show() {
    //     // document.querySelector('.offer__item').onclick;
    //     // modal.style.display = 'block';
    //     // console.log('');
    //     let modal = document.querySelector('#show');
    //     // modal.hidden = true;
    //     modal.style.display = 'block';
    // }
    // function hide() {
    //     // document.querySelector('.offer__item').onclick;
    //     // modal.style.display = 'block';
    //     // console.log('');
    //     let modal = document.querySelector('#show');
    //     // modal.hidden = true;
    //     modal.style.display = 'none';
    // }
    // showModal.onclick = show;
    // hideModal.onclick = hide;
    // hide()
    // console.log('');

    // $('.offer__item').on('click', function () {
    //     $('.offer__items').removeClass('offer__items--active');
    //     $(this).addClass('offer__items--active');
    // });


    /*	$(".menu a").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


});