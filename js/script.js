var hidePopUp = false;

$(document).ready(function () {
    try {
        window.onresize = videoResize;
    } catch (err) { //We can also throw from try block and catch it here
        // console.log("err");
    }

    function videoResize() {
        if ($(window).width() <= 991) {
            $("#fb-root").html(null);
            // $("#spopup").html(null);
            try {
                var videoFile = 'videos/bg-portrait.mp4';
                $('#myvid source').attr('src', videoFile);
                $("#myvid")[0].load();
                $("#myvid")[0].play();
            } catch (err) { //We can also throw from try block and catch it here
                // console.log("err");
            }
        }

        if ($(window).width() >= 992) {
            // $("#fb-root").html(null);
            try {
                var videoFile = 'videos/bg-landscape.mp4';
                $('#myvid source').attr('src', videoFile);
                $("#myvid")[0].load();
                $("#myvid")[0].play();
            } catch (err) { //We can also throw from try block and catch it here
                // console.log("err");
            }
        }
    }

    try {
        window.onresize = videoZAZZResize;

        function videoZAZZResize() {
            if ($(window).width() <= 991) {
                $("#how-to-join-lnk").attr("href", "#how-to-join-mb")
                $("#how-to-redeem-lnk").attr("href", "#how-to-redeem-mb")
            }

            if ($(window).width() >= 992) {
                $("#how-to-join-lnk").attr("href", "#how-to-join-mn")
                $("#how-to-redeem-lnk").attr("href", "#how-to-redeem-mn")
            }
        }
    } catch (err) { //We can also throw from try block and catch it here
        // console.log("err");
    }


    // Initialize Firebase
    var merchStatsConfig1 = {
        apiKey: "AIzaSyArCQMJGfncTdxllXugahAapUH5UZqJh9I",
        authDomain: "mbqmerchstats.firebaseapp.com",
        databaseURL: "https://mbqmerchstats.firebaseio.com",
        projectId: "mbqmerchstats",
        storageBucket: "mbqmerchstats.appspot.com",
        messagingSenderId: "117123414878"
    };
    firebase.initializeApp(merchStatsConfig1);

    var dbRef = firebase.database().ref().child('stats');
    dbRef.on('value', listDataStats, null);

    function listDataStats(data) {
        window.stats = data.val();
        try {
            $(".totaloffersPlus").html(stats["totaloffersPlus"]);
        } catch (err) {
            // console.log("err");
        }
        try {
            $(".totaloffers").html(stats["totaloffers"]);
        } catch (err) {
            // console.log("err");
        }
        try {
            $(".totalmerchantsPlus").html(stats["totalmerchantsPlus"]);
        } catch (err) {
            // console.log("err");
        }
        try {
            $(".totalmerchants").html(stats["totalmerchants"]);
        } catch (err) {
            // console.log("err");
        }
        try {
            $(".totalsavings").html(stats["totalsavings"]);
        } catch (err) {
            // console.log("err");
        }

        var i = 0;
        $('.counter').each(function () {
            if (i == 0) {
                this.innerHTML = window.stats["totaloffers"] - 100;
            } else if (i == 1) {
                this.innerHTML = window.stats["totalmerchants"] - 50;
            } else {
                this.innerHTML = window.stats["totalsavings"] - 10000;
            }

            i++;

        });
    }

    try {
        var hT = $('#numbers').offset().top,
            hH = $('#numbers').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hT + hH - wH)) {
            var dbRef = firebase.database().ref().child('stats');
            dbRef.on('value', listDataMerchantPage, null);
        }
    } catch (err) {
        // console.log("err");
    }


    $(window).scroll(function () {
        // if ($(document).scrollTop() >= $(document).height() / 5 && !hidePopUp)
        //     $("#spopup").show("slow");
        // else $("#spopup").hide("slow");

        try {
            var hT = $('#numbers').offset().top,
                hH = $('#numbers').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();

            if (wS > (hT + hH - wH)) {
                var dbRef = firebase.database().ref().child('stats');
                dbRef.on('value', listDataMerchantPage, null);
            }
        } catch (err) {
            // console.log("err");
        }
    });

    function listDataMerchantPage(data) {
        window.stats = data.val();

        var i = 0;
        $('.counter').each(function () {
            var $this = $(this);
            if (i == 0) {
                countTo = window.stats["totaloffers"];
            } else if (i == 1) {
                countTo = window.stats["totalmerchants"];
            } else {
                countTo = window.stats["totalsavings"];
            }

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
            i++;
        });
    }


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
        // console.log("err");
    }
});

$(function () {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        if ($(window).width() <= 991) {
            var $navmenu = $('.nav-menu');
            $navmenu.removeClass("is-scrolling");
        }

        if ($(window).width() >= 992) {
            var $navmenu = $('.nav-menu');
            if ($(window).scrollTop() > 50) {
                $navmenu.addClass('is-scrolling');
            } else {
                $navmenu.removeClass("is-scrolling");
            }
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
            loop: true,
            autoplay: true,
            navText: ['<span><img src="images/left.png" class="img-fluid xagagzzzz" alt="logo" /></span>', '<span><img src="images/right.png" class="img-fluid xagagzyzzz" alt="logo" /></span>']
        });
    }

    // $('.testimonials .owl-nav').click(function (event) {
    //     $(this).removeClass('disabled');
    // });

    var $adadsDiv = $('#owl-carousel');
    if ($adadsDiv.length && $.fn.owlCarousel) {
        $adadsDiv.owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3
                },
                700: {
                    items: 4
                },
                800: {
                    items: 5
                },
                1000: {
                    items: 6,
                    loop: false
                }
            }
        });
    }


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

function closeSPopup() {
    $('#spopup').hide('slow');
    hidePopUp = true;
}

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