/*-------------------------------------------------------
All javascript and jquery plugins activation
-------------------------------------------------------*/
(function($){
    "use strict";


    /*---------------------------
    Pre-loader Settings
    ---------------------------*/
    $(window).on("load", function() {
        $(".loader").delay(2000).fadeOut("slow");
      $("#overlayer").delay(2000).fadeOut("slow");
    })
    
    /*---------------------------
    sticky header
    ---------------------------*/
    $(window).on('scroll',function(){ 
        $(".header").toggleClass("sticky", window.scrollY > 0);
    })
    
    
    /*---------------------------
    mobile-device dropdown menu
    ---------------------------*/
    $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    }); 
    
    // Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
            $(".mobile-offcanvas").removeClass("show");
            $("body").removeClass("overlay-active");
        }
    });
    
    $(".mobile__menu__close, .screen-overlay").on('click',function(e){
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });
    
    
    /*---------------------------
    Main Slider
    ---------------------------*/
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });
    
    
    /*---------------------------
    Video
    ---------------------------*/
    $('.video-show').venobox(); 
    $('.video-link').venobox(); 
    
    
    /*---------------------------
    Countdown
    ---------------------------*/
    if ($('.slider__block__v3__countdown').length > 0) {
        // Set the date we're counting down to
        let countDownDate = new Date("Dec 31, 2022 15:37:25").getTime();
        
        // Update the count down every 1 second
        setInterval(function() {
            // Get today's date and time
            let now = new Date().getTime();
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result
            document.querySelector('.days').innerHTML = days;
            document.querySelector('.hours').innerHTML = hours;
            document.querySelector('.minutes').innerHTML = minutes;
            document.querySelector('.seconds').innerHTML = seconds;
            
        }, 1000);
    }
    
    
    
    /*---------------------------
    Event gallery Slider
    ---------------------------*/
    $('.event-gallery__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true,
        variableWidth: true, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]
    });
    
    
    /*---------------------------
    Counter up
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /*---------------------------
    Google map
    ---------------------------*/
    let map;
    $(document).ready(function(){
        let element =  $('#map')[0];
        if (typeof(element) != 'undefined' && element != null){
          $('#map')
            .gmap3({
                center:[48.8620722, 2.352047],
                zoom:4
            })
            .marker([
                {position:[48.8620722, 2.352047]},
                {address:"86000 Poitiers, France"},
                {address:"66000 Perpignan, France", icon: "https://maps.google.com/mapfiles/marker_grey.png"}
            ])
            .on('click', function (marker) {
                marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
            });
        }
    });
    
    /*---------------------------
    Scroll to top
    ---------------------------*/
    
    $(window).on('scroll',function(){ 
        if($(this).scrollTop()>500){
            $('.scroll-top').fadeIn();
        }else{
            $('.scroll-top').fadeOut();
        }
    });
    
    $('.scroll-top').on("click",function(){
        $("html,body").animate({scrollTop : 0 }, 600);
        return false;
    });
    
    
    /*---------------------------
    WOW animation
    ---------------------------*/
    new WOW().init();
    
})(jQuery);