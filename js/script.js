/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved 

*/

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

// win.scroll(function (event) {
//     allMods.each(function (i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             el.addClass("come-in");
//         }
//     });
// });

$(document).ready(function () {
    window.onresize = doALoadOfStuff;

    function doALoadOfStuff() {
        if ($(window).width() <= 991) {
            $("#fb-root").html(null);
            $("#spopup").html(null);
            try {
                var videoFile = 'videos/test-portrait.webm';
                $('#myvid source').attr('src', videoFile);
                $("#myvid")[0].load();
                $("#myvid")[0].play();
            } catch (err) { //We can also throw from try block and catch it here
                console.log("err");
            }
        }

        if ($(window).width() >= 992) {
            // $("#fb-root").html(null);
            try {
                var videoFile = 'videos/test-landscape.webm';
                $('#myvid source').attr('src', videoFile);
                $("#myvid")[0].load();
                $("#myvid")[0].play();
            } catch (err) { //We can also throw from try block and catch it here
                console.log("err");
            }
        }
    }


    /* Every time the window is scrolled ... */
    // $(window).scroll(function () {

    /* Check the location of each desired element */
    // $('.hideme').each(function (i) {

    // var bottom_of_object = $(this).position().top + $(this).outerHeight();
    // var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    // if (bottom_of_window > bottom_of_object) {

    // $(this).animate({
    // 'opacity': '1'
    // }, 1500);

    // }

    // });

    // });

});

$(function () {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function () {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function (e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function (e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $adadsDiv = $('#owl-carousel');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        alert("asdsdd");
    }
    $adadsDiv.owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

}); /* End Fn */

// ===== Scroll to Top ==== 
// $(window).scroll(function () {
// if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
// $('#return-to-top').fadeIn(200); // Fade in the arrow
// } else {
// $('#return-to-top').fadeOut(200); // Else fade out the arrow
// }
// });
// $('#return-to-top').click(function () { // When arrow is clicked
// $('body,html').animate({
// scrollTop: 0 // Scroll to top of body
// }, 500);
// });

$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
    }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
            $this.text(Math.floor(this.countNum));
        },
        complete: function () {
            $this.text(this.countNum);
            //alert('finished');
        }

    });

});

$(window).scroll(function () {
    if ($(document).scrollTop() >= $(document).height() / 5)
        $("#spopup").show("slow");
    else $("#spopup").hide("slow");
});

function closeSPopup() {
    $('#spopup').hide('slow');
}

$(document).on("click", function (e) {
    var container = $("#navbar");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if (
            container.hasClass('navbar-collapse collapse show')
        ) {
            container.removeClass('show');
        }
    }

});

$(document).on("click", function (e) {
    var container = $("#navbar");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if (
            container.hasClass('navbar-collapse primary_nav_wrap collapse show')
        ) {
            container.removeClass('show');
        }
    }
});

$(document).ready(function () {
    try {
        var slideCount = $('.customer-logos > div').length;
        var randomStart = Math.floor(Math.random() * slideCount);
        $('.customer-logos').slick({
            initialSlide: randomStart,
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,
            accessibility: true,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    } catch (err) {
        console.log("err");
    }
});