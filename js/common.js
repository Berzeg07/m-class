$(document).ready(function() {

    $('.question-icon').mouseenter(function() {
        $(this).next().fadeIn();
    });
    $('.question-icon').mouseleave(function() {
        $(this).next().fadeOut();
    });

    $('.request-programs_list__link').click(function() {
        var ch = $(this).hasClass('active');
        if (!ch) {
            var price = parseInt($(this).parents('li').find('.priceGroup').html());
            var total = parseInt($('#totalPrice').html());
            var totalNew = price + total;
            $('#totalPrice').html(totalNew);
        } else {
            var totalNew = parseInt($('#totalPrice').html());
            var sum = parseInt($(this).parents('li').find('.price span').html());
            var totalNew = totalNew - sum;
            if (totalNew < 0) {
                totalNew = 0;
            }
            $('#totalPrice').html(totalNew);
        }
        $(this).toggleClass('active');
        $(this).parents('li').find('.programs-about').slideToggle();
        $(this).parents('li').find('.programs-about_group').toggleClass('active');
        $(this).parents('li').find('.price').toggleClass('priceActive');
    });

    $('.ourPrice').click(function() {
        var arr = new Array();
        $(this).parents('.programs-about_info').find('.ourPrice').removeClass('active');
        $(this).addClass('active');
        var price = parseInt($(this).find('span').html());
        var info = $(this).find('em').html();
        var totalProgramPrice = $(this).parents('li').find('.price').find('span');
        $(totalProgramPrice).html(price);
        $('.priceActive span').each(function() {
            arr.push(this.innerHTML);
        });
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum = sum + parseInt(arr[i]);
        }
        $('#totalPrice').html(sum);

        if (info == 'в группе') {
            $(this).parents('li').find('.about-price').html('цена ' + info);
        } else {
            $(this).parents('li').find('.about-price').html(info);
        }
    });

    $('#show-options').click(function() {
        $(this).toggleClass('active');
        $('.request-questions_hidden').slideToggle();
    });

    $('#hide-options').click(function() {
        $('.request-questions_hidden').slideUp();
        $('#show-options').removeClass('active');
    });

    if ($('#rights-y').prop("checked")) {
        $('.request-hidden').addClass('active');
    }
    if ($('#rights-n').prop("checked")) {
        $('.request-hiddenr').removeClass('active');
    }

    $('#rights-y').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('.request-hidden').slideDown();
        }
    });

    $('#rights-n').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('.request-hidden').slideUp();
        }
    });

    if ($('#has-car_y').prop("checked")) {
        $('#has-car').addClass('active');
    }
    if ($('#has-car_n').prop("checked")) {
        $('#has-car').removeClass('active');
    }

    $('#has-car_y').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('#has-car').addClass('active');
        }
    });

    $('#has-car_n').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('#has-car').removeClass('active');
        }
    });

    if ($('#car-type_y').prop("checked")) {
        $('#car-type_inp').addClass('active');
    }
    if ($('#car-type_n').prop("checked")) {
        $('#car-type_inp').removeClass('active');
    }

    $('#car-type_y').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('#car-type_inp').addClass('active');
        }
    });

    $('#car-type_n').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('#car-type_inp').removeClass('active');
        }
    });

    if ($('#type-tr').prop("checked")) {
        $('#type-tr_select').addClass('select-disable');
    }
    $('#type-tr').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('#type-tr_select').addClass('select-disable');
        }
        if (!checkInp) {
            $('#type-tr_select').removeClass('select-disable');
        }
    });

    if ($('#driveUnit').prop("checked")) {
        $('#driveUnit_select').addClass('select-disable');
    }
    $('#driveUnit').click(function() {
        var checkInp = $(this).prop("checked");
        if (checkInp) {
            $('#driveUnit_select').addClass('select-disable');
        }
        if (!checkInp) {
            $('#driveUnit_select').removeClass('select-disable');
        }
    });

    $('.filter').selectmenu();

    $('.num-inp').on('keydown', function(e) {
        if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
            return false;
        };
    })

    $('.focus-animate input').focus(function() {
        $(this).parent().addClass('active');
    });
    $('.focus-animate input').blur(function() {
        $(this).parent().removeClass('active');
    });

    var checkMap = $("div").is("#contacts-map");

    if (checkMap) {
        ymaps.ready(init);

        function init() {
            var center = [55.745559, 37.796364];
            var myMap = new ymaps.Map('contacts-map-1', {
                center: center,
                controls: [],
                zoom: 16,
                controls: ['smallMapDefaultSet']
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap.behaviors.disable('scrollZoom');

            var myPlacemark = new ymaps.Placemark(center, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'ул.Перовская,д.61/2, стр.1',
                hintContent: 'ул.Перовская,д.61/2, стр.1'
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
                iconImageSize: [53, 63]
                // preset: 'twirl#violetIcon'
            });

            myMap.geoObjects.add(myPlacemark);

            var center2 = [55.745559, 37.796364];
            var myMap2 = new ymaps.Map('contacts-map-2', {
                center: center2,
                controls: [],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap2.behaviors.disable('scrollZoom');

            var myPlacemark2 = new ymaps.Placemark(center2, {
                balloonContent: 'ул.Перовская,д.61/2, стр.1',
                hintContent: 'ул.Перовская,д.61/2, стр.1'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
                iconImageSize: [53, 63]
            });

            myMap2.geoObjects.add(myPlacemark2);
            var center3 = [55.745559, 37.796364];
            var myMap3 = new ymaps.Map('contacts-map-3', {
                center: center3,
                controls: [],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap3.behaviors.disable('scrollZoom');

            var myPlacemark3 = new ymaps.Placemark(center3, {
                balloonContent: 'ул.Перовская,д.61/2, стр.1',
                hintContent: 'ул.Перовская,д.61/2, стр.1'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
                iconImageSize: [53, 63]
            });

            myMap3.geoObjects.add(myPlacemark3);
        }
    }

    var checkSticky = $("div").is("#airSticky");

    if (checkSticky) {
        (function() {
            var a = document.querySelector('#airSticky'),
                b = null,
                P = 50; // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);

            function Ascroll() {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''),
                        s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    b = document.createElement('div');
                    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                    a.insertBefore(b, a.firstChild);
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.lettersBlock').getBoundingClientRect().top + 50); // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R) {
                        b.className = 'stop';
                        b.style.top = -R + 'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
                window.addEventListener('resize', function() {
                    a.children[0].style.width = getComputedStyle(a, '').width
                }, false);
            }
        })();
    }
    $('.contTabs .contTabs-btn').click(function(e) {
        e.preventDefault();
        var checkSeason = $("div").is(".season-choose");
        $('.contTabs .contTabs-btn').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        if (checkSeason) {
            $(".season-choose").css('display', 'none');
            var next = $(this).next();
            $(next).fadeIn();
            $(next).find('.season-choose_first').click();
        }
        $('.contTabs-cont').not(tab).css({
            'display': 'none'
        });
        $(tab).css('display', 'block');
    });
    $('.contTabs a:first').click();

    $('.season-choose a').click(function(e) {
        e.preventDefault();
        $('.season-choose a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.programs-list').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn();
    });
    $('.season-choose a:first').click();

    $('#cm-tabLink_1 a').click(function(e) {
        e.preventDefault();
        $('#cm-tabLink_1 a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.cm-tabCont').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn();
    });
    $('#cm-tabLink_1 a:first').click();

    $('#cm-tabLink_2 a').click(function(e) {
        e.preventDefault();
        $('#cm-tabLink_2 a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.cm-tabCont-2').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn();
    });
    $('#cm-tabLink_2 a:first').click();

    $('#cm-tabLink_3 a').click(function(e) {
        e.preventDefault();
        $('#cm-tabLink_3 a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.cm-tabCont-3').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn();
    });
    $('#cm-tabLink_3 a:first').click();

    $('.map-tabLink li a').click(function(e) {
        e.preventDefault();
        $('.map-tabLink li a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.contacts-map_inner').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn();
    });
    $('.map-tabLink li:first a').click();


    $(".programs-list_link").click(function() {
        var $this = $(this);
        var check = $(this).hasClass('active');

        $('.programs-list_link').removeClass('active');
        $($this).toggleClass('active');

        if (!check) {
            $('.programs-about').css('display', 'none');
            $($this).parents('li').find('.programs-about').fadeIn();
        }
        if (check) {
            $($this).removeClass('active');
            $($this).parents('li').find('.programs-about').fadeOut();
        }

    });


    // $('.calendarShow').click(function() {
    //     $(this).css('display', 'none');
    //     $(this).next().fadeIn();
    // });
    // $('.hideCalendar').click(function() {
    //     var parent = $(this).parents('.programs-about_bottom');
    //     $(parent).find('.programs-about_calendar').css('display', 'none');
    //     $(parent).find('.btn').fadeIn();
    // });

    $('#programsArticle-tabs a').click(function(e) {
        e.preventDefault();
        $('.programsArticle-tabs a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.programsArticle-tabs_cont').not(tab).css({
            'display': 'none'
        });
        $(tab).css('display', 'block');
    });
    $('.programsArticle-tabs a:first').click();

    $('.programs-about_tabsLink a').click(function(e) {
        e.preventDefault();
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.programs-about_tabs').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn();
    });
    $('.programs-about_tabsLink a:first').click();
    var elementList = document.querySelectorAll('div.programs-about_tabsLink');
    $(elementList).find('a:first').addClass('active');

    var checkBlogPreview = $('.previews .news:first').addClass('active');
    var activeArticle = $('.previews .active');
    if (checkBlogPreview) {
        $(activeArticle).find('.news-article_des').css('display', 'none');
        $(activeArticle).find('.news-thumb').css('display', 'none');
        $(activeArticle).find('.article-title_arrow').addClass('active');
        $(activeArticle).find('.news-content_hidden').fadeIn();
    }

    $('.article-title_arrow').click(function() {
        function removeActive() {
            $('.article-title_arrow').removeClass('active');
            $('.news').removeClass('active');
        }

        function hideContent(block) {
            $(block).find('.news-article_des').css('display', 'block');
            $(block).find('.news-thumb').css('display', 'block');
            $(block).find('.news-content_hidden').css('display', 'none');
        }

        removeActive();

        $(this).addClass('active');
        var parent = $(this).parents('.news');
        $(parent).addClass('active');
        var check = $(parent).hasClass('active');

        hideContent('.news');

        if (check) {
            $(parent).find('.news-article_des').css('display', 'none');
            $(parent).find('.news-thumb').css('display', 'none');
            $(parent).find('.news-content_hidden').fadeIn();
        }
    });

    $('.pagination a').click(function() {
        $('.pagination a').removeClass('active');
        $(this).addClass('active');
    });

    $(function() {
        var d = new Date(),
            n = d.getMonth(),
            day = d.getDate();

        $('.calendar-inner_item a').removeClass('click-active');

        $('.calendar-inner .calendar-inner_item').each(function() {
            var dateNum = $(this).find('span').html();
            $(this).attr('data', dateNum);
            var checkAttr = $(this).attr("data");
            if (checkAttr == day) {
                $(this).find('a').addClass('click-active');
            }
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
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: n,
            responsive: {
                320: {
                    items: 1
                }
            }
        });

        $('.calendar-inner_item a').each(function() {
            var checkCalendar = $(this).hasClass('free-active');
            if (!checkCalendar) {
                $('.noLessons').addClass('dFlex');
                $('.noLessons').fadeIn();
                $('.hiddenTab').fadeOut();
            }
        });

    });

    $('.calendar-inner_item a').click(function(e) {
        e.preventDefault();
        $('.calendar-inner_item a').removeClass('click-active');
        var check = $(this).hasClass('free-active');

        if (check) {
            $('.noLessons').fadeOut();
            $(this).addClass('click-active');
            var tab = $(this).attr('href');
            $('.schedule-timeBox').not(tab).css({
                'display': 'none'
            });
            $(tab).fadeIn(400);
            $('.hiddenTab').fadeIn();
        }
        if (!check) {
            $(this).addClass('click-active');
            $('.noLessons').addClass('dFlex');
            $('.noLessons').fadeIn();
            $('.hiddenTab').fadeOut();
        }
    });

    $('.video-slider_item p').mousemove(function(e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        $('.video-slider_item p').css('text-shadow', +rYP / 50 + 'px ' + rXP / 80 + 'px rgba(221,71,46,.6), ' + rXP / 70 + 'px ' + rYP / 112 + 'px rgba(66,17,20,.7)');
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 60) {
                $('.header-fixed').addClass('stickytop');
                $('.header-logo img').addClass('logo-fixed');

            }
            if ($(this).scrollTop() < 60) {
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

    $(".aboutCompany-history_date").click(function() {
        var $this = $(this);

        if (!$this.hasClass("active")) {
            $(".aboutCompany-history_hidden").slideUp();
            $(".aboutCompany-history_date").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().slideToggle();

    });
    $(".aboutCompany-history_list li:first .aboutCompany-history_date").click();

    $('.aboutCompany-history_next').click(function() {
        $('.aboutCompany-history_list li:nth-child(n+4)').slideDown();
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
    $(".recallForm-phone").mask("+ 7 (999) 999 - 99 - 99?");


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

    $(".aboutCompany-slider").owlCarousel({
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
            992: {
                items: 5
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

    $('.modal-show').click(function(e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.modalForm').fadeIn();
        $('.modalForm').addClass('active');

    });

    function hideModals() {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
        $('.modal').removeClass('active');
    }

    $('.close-modal').click(function() {
        hideModals();
    });
    $('.overlay').click(function() {
        hideModals();
    });
    $('.modalThanks-item').click(function() {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
        $('.modal').removeClass('active');
    });

    // send message ============================================================
    $("#modalForm").submit(function() {

        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/sendmessage.php",
            data: form_data,
            success: function() {
                cleanTnanks(this);
            }
        });
        return false;
    });

    function cleanTnanks(form) {
        $('.modalForm').fadeOut();
        $('.modalForm').removeClass('active');
        $('.modalThanks').fadeIn();
        $('.modalThanks').addClass('active');
    };

    $("#contentForm").submit(function() {

        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/sendmessage.php",
            data: form_data,
            success: function() {
                cleanTnanksCont(this);
            }
        });
        return false;
    });

    function cleanTnanksCont(form) {
        $('.overlay').fadeIn();
        $('.modalThanks').fadeIn();
        $('.modalThanks').addClass('active');
    };

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
