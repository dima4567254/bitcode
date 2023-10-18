function addClass(className) {
    document.documentElement.classList.add(className);
}
var avif = new Image();
avif.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
avif.onload = function () {
    addClass("avif");
};
avif.onerror = function () {
    check_webp_feature(function (isSupported) {
        if (isSupported) {
            return addClass("webp");
        }
        return addClass("fallback");
    });
};
function check_webp_feature(callback) {
    var img = new Image();
    img.onload = function () {
        var result = img.width > 0 && img.height > 0;
        callback(result);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src =
        "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
}

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

