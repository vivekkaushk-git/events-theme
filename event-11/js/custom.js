
$(document).ready(function() {
	'use strict';

  /*-----------------------------------
  Navbar
  -----------------------------------*/
  $('.dropdown-menu').on('click', 'a.dropdown-toggle', function(e) {
    var $el = $(this);
    var $parent = $(this).offsetParent(".dropdown-menu");
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    
    $(this).parent("li").toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-menu .show').removeClass("show");
    });
    
    if (!$parent.parent().hasClass('navbar-nav')) {
      $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
    }

    return false;
  });

  if($(window).width() < 1199) {
    $(document).on('click', function(event) {
      var clickover = $(event.target);
      var _opened = $('#navbarSupportedContent').hasClass('show');
      if(_opened === true && !(clickover.is('.navbar-nav li, .navbar-nav .dropdown *'))) {
        $('button.navbar-toggler').trigger('click');
      }
    });
  }

  /*--------------------------------------------
  Sticky Nav
  --------------------------------------------*/

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $('.bc-nav').addClass('fixed');
    } else {
      $('.bc-nav').removeClass('fixed');
    }
  });

  /*--------------------------------------------
  Event Tab Active
  --------------------------------------------*/

  $('.nav-tabs').on('click', '.nav-link', function() {
    var getIdVal = $(this).data("attr");
    $('.event-nav').removeAttr('id');
    $('.event-nav').attr('id', getIdVal);
  })

	/*--------------------------------------------
	Owl Carousel
	--------------------------------------------*/
  $('.banner-dark-wrap').owlCarousel({
    loop:true,
    items: 1,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ['<img src="images/long-arrow-left.png" alt="" />','<img src="images/long-arrow-right.png" alt="" />'],
    mouseDrag: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 500
  }) 

  $('.clients').owlCarousel({
    loop:true,
    autoplay: true,
    margin: 20,
    dots: false,
    nav:false,
    responsive:{
      0:{
        items:2
      },
      480:{
        items:3
      },
      992:{
        items:4
      },
      1200:{
        items:6
      }
    }
  })

  $('.post-slider').owlCarousel({
    loop:true,
    items: 1,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>',
              '<i class="fas fa-angle-right"></i>'],
    mouseDrag: false,
    autoplayTimeout: 2000,
    smartSpeed: 500
  }) 

  /*-------------------------------------
  Countdown
  -------------------------------------*/
  $('.banner-countdown').each(function () {
    var endTime = $(this).data('time');
    $(this).countdown(endTime, function (tm) {
      var countTxt = '';
      countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span></span></span>';
      countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span></span></span>';
      countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Mins</span></span></span></span>';
      countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Secs</span></span></span></span>';

      $(this).html(tm.strftime(countTxt));
    });
  });

  /*-------------------------------------
  Magnific Popup
  -------------------------------------*/
  $('.club-gallery, .club-gallery-2').each(function () { 
    $(this).magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

  $('.banner-play-button a').magnificPopup({
    type: 'iframe',
    gallery: {
      enabled: true,
    },
  });

  $.extend(true, $.magnificPopup.defaults, {
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        }
      }
    }
  });


  /*-------------------------------------
  Mouse Move Animation
  -------------------------------------*/

  var windowWidth = $(window).width();

  $('.bubble-bg').on('mousemove', function(event) {
    event.stopPropagation();

    var moveX = (($(window).width() / 2) - event.screenX) * 0.02;
    var moveY = (($(window).height() /2) - event.screenY) * 0.02;

    $('.bubble-img').css({marginLeft: moveX + 'px', marginTop: moveY + 'px'});

  });

  /*-------------------------------------
  Mouse Move Animation
  -------------------------------------*/

  $('.plClose').on('click', function(event) {
    var clickover1 = $(event.target);
    var _opened1 = $('.pl-container').hasClass('h-show');
    if(_opened1 === true && !(clickover1.is('.pl-ul'))) {
      $('.ap__controls--playlist').trigger('click');
    }
  });

  /*-----------------------------------
  Contact Form
  -----------------------------------*/

  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);
  }

  $("#contactForm").on('submit', function (e) {
    e.preventDefault();
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        subject: $("#subject").val(),
        message: $("#message").val()
    };

    if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) && (data['phone'].length > 1)) {
      $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: data,
        success: function () {
          $('#contactForm .input-success').delay(100).fadeIn(1000);
          $('#contactForm .input-error').fadeOut(100);
        }
      });
    } else {
      $('#contactForm .input-error').delay(100).fadeIn(1000);
      $('#contactForm .input-success').fadeOut(100);

    }
    return false;
  });

  /*-----------------------------------
  Subscription
  -----------------------------------*/
  $(".newsletter-form").ajaxChimp({
    callback: mailchimpResponse,
    url: "YourLinkWillBeHere" // Replace your mailchimp post url inside double quote "".  
  });

  function mailchimpResponse(resp) {
    if (resp.result === 'success') {
      $('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();
    } else if (resp.result === 'error') {
      $('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
    }
  }

})