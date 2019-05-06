$(document).ready(function() {

    // $('.video-slider_item p').mousemove(function(e) {
    //     var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
    //     var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
    //     $('.video-slider_item p').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(227,6,19,.8), ' + rYP / 8 + 'px ' + rXP / 30 + 'px rgba(255,237,0,1), ' + rXP / 35 + 'px ' + rYP / 12 + 'px rgba(0,159,227,.7)');
    // });

    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 60) {
                $('.header-fixed').addClass('stickytop');
                $('.header-logo img').addClass('logo-fixed');

            }
            if($(this).scrollTop() < 60){
                $('.header-fixed').removeClass('stickytop');
                $('.header-logo img').removeClass('logo-fixed');
            }
        });
    });

    $('.shedule-lessons li').click(function() {
        $('.shedule-lessons li').removeClass('active');
        $(this).addClass('active');
    });

    $(".schedule-timeBox_item").click(function() {
        $(".schedule-timeBox_item").removeClass('active');
        $(this).addClass('active');
    });

    $('.schedule-inp_input').focus(function() {
        $('.schedule-inp label').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.schedule-inp_input').blur(function() {
        $('.schedule-inp label').removeClass('active');
    });

    $('.schedule-selectCity p').click(function() {
        $('.schedule-selectCity_dropDown').slideToggle();
        $('.schedule-selectCity_dropDown li').click(function() {
            var choosenCity = $(this).html();
            $('.schedule-selectCity_dropDown').slideUp();
            $('.schedule-selectCity p').html(choosenCity);
        });
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".schedule-selectCity").length) return;
        $(".schedule-selectCity_dropDown").slideUp();
        event.stopPropagation();
    });

    $('.transmission-num').hover(function() {

        $('.transmission-num').removeClass('active');
        $(this).addClass('active');
        $('.transmission-article').removeClass('active');
        $('.transmission-num_pb').removeClass('active');
        var smallLine = $(this).find('.transmission-num_pb');

        function showLine() {
            $(smallLine).addClass('active');
        }

        var id = $(this).attr('id');

        if (id == 'num-1') {
            $('#tr-progressBar').css('width', '0%');
            $('#article-1').addClass('active');
            showLine();
        }
        if (id == 'num-2' || id == 'num-3') {
            $('#tr-progressBar').css('width', '33.4%');
            showLine();
            if (id == 'num-2') {
                $('#article-2').addClass('active');
            }
            if (id == 'num-3') {
                $('#article-3').addClass('active');
            }
        }
        if (id == 'num-4' || id == 'num-5') {
            $('#tr-progressBar').css('width', '66.7%');
            showLine();
            if (id == 'num-4') {
                $('#article-4').addClass('active');
            }
            if (id == 'num-5') {
                $('#article-5').addClass('active');
            }
        }
        if (id == 'num-6') {
            $('#tr-progressBar').css('width', '99.9%');
            showLine();
            $('#article-6').addClass('active');
        }

    });

    // wow animate
    new WOW().init();

    $(".schedule-inp_phone").mask("+ 7 (999) 999 - 99 - 99?");

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

    $(".schedule-slider").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        center: false, //если нужны обрезаные края
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            320: {
                items: 1
            }
        }
    });

    $(".video-slider").owlCarousel({
        loop: true,
        margin: 20,
        animateOut: 'fadeOut',
        responsiveClass: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        center: false, //если нужны обрезаные края
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            320: {
                items: 1
            }
        }
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
            Box.getStyles('simplebox_css', 'libs/simplebox/simplebox.css');
            Box.getScripts('simplebox_js', 'libs/simplebox/simplebox.js', function() {
                simplebox.init();
                for (i = 0, l = els.length; i < l; ++i)
                    simplebox.start(els[i]);
                simplebox.start('a[rel=simplebox_group]');
            });
        }
    })();

    var swiper = new Swiper('.advantages-slider', {
        spaceBetween: 30,
        // slidesPerView: 1,
        fadeEffect: {
            crossFade: true
        },
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },
        loop: false
    });

    $('.calendar-inner_item a').click(function(e) {
        e.preventDefault();
        $('.calendar-inner_item a').removeClass('click-active');
        var check = $(this).hasClass('free-active');

        if (check) {
            $(this).addClass('click-active');
            var tab = $(this).attr('href');
            $('.schedule-timeBox').not(tab).css({
                'display': 'none'
            });
            $(tab).fadeIn(400);
            $('.hiddenTab').fadeIn();
        }
        if (!check) {
            $('.hiddenTab').fadeOut();
        }
    });

    $('.calendar-inner_item a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab__box').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });

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
