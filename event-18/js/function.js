(function ($) {
    'use strict';

    var revapi1061;
    $(document).ready(function ($) {
        // Revolution Slider Function

        if ($("#rev_slider_1061_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1061_1");
        } else {
            revapi1061 = $("#rev_slider_1061_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 5000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 50,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    tabs: {
                        style: "metis",
                        enable: true,
                        width: 90,
                        height: 50,
                        min_width: 150,
                        wrapper_padding: 0,
                        wrapper_color: "",
                        wrapper_opacity: "0",
                        tmp: '<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div></div>',
                        visibleAmount: 3,
                        hide_onmobile: true,
                        hide_under: 800,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: "vertical",
                        span: true,
                        position: "inner",
                        space: 0,
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: -100
                    }
                },
                responsiveLevels: [1240, 1024, 778, 640, 600, 480, 400, 360, 320],
                visibilityLevels: [1240, 1024, 778, 640, 600, 480, 400, 360, 320],
                gridwidth: [1240, 1024, 778, 640, 600, 480, 400, 360, 320],
                gridheight: [868, 768, 960, 640, 600, 480, 400, 360, 320],
                lazyType: "none",
                parallax: {
                    type: "3D",
                    origo: "slidercenter",
                    speed: 1000,
                    levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50],
                    ddd_shadow: "off",
                    ddd_bgfreeze: "on",
                    ddd_overflow: "hidden",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 100,
                },
                spinner: "off",
                stopLoop: "on",
                stopAfterLoops: 0,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0px",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
        // End Revolution Slider

        $(".nav li a").each(function () {
            if ($(this).next().length > 0) {
                $(this).addClass("parent");
            };
        })
        $(document).on('click', '.toggleMenu', function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(".nav").slideToggle();
        });
        adjustMenu();
    });


    // Fancybox image function
    $('[data-fancybox]').fancybox({
        image: {
            protect: true
        }
    });

    // Wow Animaiton Initialization
    new WOW().init();

    //Slick slider Function
    $('.single-item').slick({
        responsive: [
			{
			    breakpoint: 768,
			    settings: {
			        arrows: false,
			        slidesToShow: 1
			    }
			}
        ]
    });


    //Designer auto slide Function
    $(".rslides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 1000,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: false,           // Boolean: Show pager, true or false
        nav: false,             // Boolean: Show navigation, true or false
        random: true,           // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: true,    // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",   // String: Text for the "previous" button
        nextText: "Next",       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",     // Selector: Declare custom pager navigation
        namespace: "rslides",   // String: Change the default namespace used
        before: function () { },   // Function: Before callback
        after: function () { }     // Function: After callback
    });


    $(window).on('load', function () {
        // Gallery Grid Layout function 
        $('.grid').masonry({
            itemSelector: '.grid-item',
            originTop: false,
        });

        // Pre-loader Function
        setTimeout(function () {
            $('body').addClass('loaded');
            $('.spinner').hide();
            $('.bg_container').css('opacity', '1');
        }, 200);
    });

    //Navigaion click Function
    $(document).on('click', '#navigation-menu a', function () {
        var togglemenu = $('.toggleMenu');
        if (togglemenu.css('display') == "block" || togglemenu.css('display') == "inline-block") {
            togglemenu.removeClass("active");
            togglemenu.find('div').removeClass("open");
            $(".nav").css("display", "none");
        }
    });

    // Menu On Click Scroll Function
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        var topoffset = 60;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - topoffset + 1
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Menu Active Scroll Script
    var lastId,
	topMenu = $(".nav"),
	topMenuHeight = topMenu.outerHeight() + 15,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
	    var item = $($(this).attr("href"));
	    if (item.length) { return item; }
	});

    //Hamburger menu icon effect function
    $('#nav-icon3').on('click', function () {
        $(this).toggleClass('open');
    });

    //Scrolling Scripts for all scrolling elements
    $(window).scroll(function () {
        // Sticky menu
        if ($(window).scrollTop() >= $(window).height()) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
        //End Sticky menu

        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top - 60 < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.removeClass("active");
            menuItems.parent().end().filter("[href='#" + id + "']").addClass("active");
        }

        //Objects Animation On Scroll Scripts
        var tmp = (($(document).scrollTop() - 900) / 0.7);
        $('#obj-11').css('top', ($(document).scrollTop() + 200) / 2.8);
        $('#obj-12').css('top', ($(document).scrollTop() + 500) / 2.5);
        $('#obj-13').css('top', ($(document).scrollTop() + 2000) / 3.5);
        $('#obj-14').css('top', ($(document).scrollTop() + 750) / 2.5);
        $('#obj-15').css('top', ($(document).scrollTop() - 2500) / 7.5);
        $('#obj-16').css('top', ($(document).scrollTop() - 2000) / 5.5);
        $('#obj-17').css('top', ($(document).scrollTop() - 2800) / 6);
        $('#obj-18').css('top', ($(document).scrollTop() - 200) / 4);
        $('#obj-19').css('top', ($(document).scrollTop() - 960) / 3.1);
        $('#obj-20').css('top', ($(document).scrollTop() - 1300) / 2.6);
        $('#obj-21').css('top', ($(document).scrollTop() - 3000) / 1.45);
        $('#obj-22').css('top', ($(document).scrollTop() - 100) / 2.3);

    });

    //Objects Animation On Mouse-move Effect Scripts
    $(document).mousemove(function (e) {
        var topval = (e.pageX * 100 / $(document).width());
        $('#obj-11').css("transform", "translate3d(" + topval + "px, 0px, 0px)");
        $('#obj-12').css("transform", "translate3d(" + (topval * 2) + "px, 0px, 0px)");
        $('#obj-13').css("transform", "translate3d(" + (topval / 2) + "px, 0px, 0px)");
        $('#obj-14').css("transform", "translate3d(" + (topval - 2) + "px, 0px, 0px)");
        $('#obj-15').css("transform", "translate3d(" + (topval + 1) + "px, 0px, 0px)");
        $('#obj-16').css("transform", "translate3d(" + (topval - 3) + "px, 0px, 0px)");
        $('#obj-18').css("transform", "translate3d(" + (topval + 2) + "px, 0px, 0px)");
        $('#obj-19').css("transform", "translate3d(" + (topval * 2) + "px, 0px, 0px)");
        $('#obj-20').css("transform", "translate3d(" + (topval + 10) + "px, 0px, 0px)");
        $('#obj-21').css("transform", "translate3d(" + (topval - 2) + "px, 0px, 0px)");
        $('#obj-22').css("transform", "translate3d(" + (topval * 2) + "px, 0px, 0px)");
    });

})(jQuery);