$(document).ready(function() {

    // Mobile menu =============================================================
    $(".burger").click(function() {
        $(this).toggleClass("is-active");
        var check = $(this).hasClass("is-active");
        if (check) {
            $(".header-fixed").fadeIn();
        } else {
            $(".header-fixed").fadeOut();
        }
    });
    $(function() {
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 991) {
                $('.header-fixed').removeAttr('style');
            }
        });
    });

    $(".letters-slider").owlCarousel({
        loop: true,
        margin: 62,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        center: false, //если нужны обрезаные края
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(".newsBlock-slider").owlCarousel({
        loop: true,
        margin: 33,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        center: false, //если нужны обрезаные края
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    (function() {
        var boxes = [],
            els, i, l;
        if (document.querySelectorAll) {
            els = document.querySelectorAll('a[rel=simplebox]');
            Box.getStyles('libs/simplebox/simplebox_css', 'libs/simplebox/simplebox.css');
            Box.getScripts('libs/simplebox/simplebox_js', 'libs/simplebox/simplebox.js', function() {
                simplebox.init();
                for (i = 0, l = els.length; i < l; ++i)
                    simplebox.start(els[i]);
                simplebox.start('a[rel=simplebox_group]');
            });
        }
    })();

    // var swiper = new Swiper('.letters-slider', {
    //     slidesPerView: 4,
    //     spaceBetween: 68,
    //     loop: true,
    //     breakpoints: {
    //         1024: {
    //             slidesPerView: 4,
    //             spaceBetween: 63,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //         },
    //         640: {
    //             slidesPerView: 2,
    //             spaceBetween: 30,
    //         },
    //         320: {
    //             slidesPerView: 0,
    //             spaceBetween: 30,
    //         }
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });

    // send message ============================================================
    // $(".form-reserv").submit(function () {
    //     var inpFirst = $(this).find('.inp_first');
    //     var inpSecond = $(this).find('.inp_second');
    //     var inpFirstInner = $(this).find('.inp_first input');
    //     var inpSecondInner = $(this).find('.inp_second input');
    //
    //     var emptyFirst = false;
    //     var emptySecond = false;
    //
    //     if (inpFirstInner.val() == "") {
    //         emptyFirst = true;
    //     }
    //     if(inpSecondInner.val() == ""){
    //         var emptySecond = true;
    //     }
    //     if (emptyFirst == true) {
    //         inpFirst.addClass("error-input");
    //         inpFirstInner.focus();
    //     }
    //     if (emptySecond == true) {
    //         inpSecond.addClass("error-input");
    //         inpSecondInner.focus();
    //     }else{
    //         var form_data = $(this).serialize();
    //         $.ajax({
    //             type: "POST",
    //             url: "/sendmessage.php",
    //             data: form_data,
    //             success: function () {
    //                 cleanTnanks(this);
    //             }
    //         });
    //     }
    //     return false;
    // });
    // function cleanTnanks(form) {
    //     $('.inp_first').removeClass("error-input");
    //     $('.inp_second').removeClass("error-input");
    //
    //     $(".inp_first input").val("");
    //     $(".inp_second input").val("");
    //
    //     $('.reservation-modal').hide();
    //     $('.modal-thanks').fadeIn();
    // };
    //
    // // custom select ===========================================================
    // $('select').selectric();
    //
    // // modal reservation =======================================================
    // $('.modal-show').click(function() {
    //     $('.overlay').fadeIn();
    //     $('.reservation-modal').fadeIn();
    //     $('.close-modal').click(function() {
    //         $('.overlay').fadeOut();
    //         $('.reservation-modal').fadeOut();
    //         $('.modal-thanks').fadeOut();
    //     });
    //     $('.overlay').click(function() {
    //         $('.overlay').fadeOut();
    //         $('.reservation-modal').fadeOut();
    //         $('.modal-thanks').fadeOut();
    //     });
    // });
    //
    // // slider ==================================================================
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 'auto',
    //     //   spaceBetween: 83,
    //     loop: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

});
