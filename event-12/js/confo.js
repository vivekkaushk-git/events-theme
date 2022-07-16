"use strict";

jQuery(document).ready(function() {
	/* PRELOADER*/
	jQuery(window).on('load', function() {
		jQuery(".preloader-outer").delay(500).fadeOut();
		jQuery(".loader").delay(250).fadeOut("slow");
	});

	// Curtain Menu Toggle
	jQuery(document).on('click', '#toggle', function(e) {
		jQuery('#overlay').toggleClass('open');
		jQuery(this).parents('.tc-sidebar').toggleClass('sidebarwidth');
		jQuery('body').toggleClass('overflow-hidden')
	});

	//Close icon
	jQuery(document).on('click', '.iconclose', function(e) {
		jQuery('#overlay').toggleClass('open');
		jQuery('.tc-sidebar').toggleClass('sidebarwidth');
		jQuery('body').toggleClass('overflow-hidden')

	});

	//overlay menu
	jQuery(document).on('click', '.overlay-menu ul li a', function(e) {
		jQuery('body').toggleClass('overflow-hidden')
	})

	// Sidebar scroll
	jQuery(document).on('click', '.scroll', function(e) {
		jQuery('#overlay').toggleClass('open');
		jQuery('.tc-sidebar').toggleClass('sidebarwidth');

	});

	//Init map
	jQuery('.tc-ourmap').gmap3({
			center: [48.8620722, 2.352047],
			zoom: 4
	}) .marker([{
		position: [48.8620722, 2.352047],
		icon:"img/mapmarker.png"
	}, {
		address:"86000 Poitiers, France"
	}, {
		address:"66000 Perpignan, France",
	}]) .on('click', function(marker) {
		marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
	});

    // Slick Slider
    var _slickslider = jQuery("#responsive-slick")
    _slickslider.slick({
        dots: true,
        speed: 300,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

  //Lightbox gallaery
	$('.content .venobox').venobox({
		numeratio: true,
		framewidth: '400px',
		frameheight: 'auto',
		border: '10px',
		titleattr: 'data-title',
		infinigall: true,
	});

	//Scrolling to Id's
	var scrollLink = jQuery('.scroll');

	// Smooth scrolling
	scrollLink.click(function(e) {
		e.preventDefault();
		jQuery('body,html').animate({
			scrollTop: jQuery(this.hash).offset().top - 150
		}, 1000);
	});

	// Ripple Effect
	jQuery(function() {
		jQuery('.tc-registerformgroup .form-group:not(.checkform-group), .tc-mobileappexp ul li a,  .tc-sponserbrands li , .tc-othersponsers .tc-othersponsersitems li, .tc-versalitecard .card .card-body').rippleEffect();
	});

	// Video popup
	jQuery('.playBut').venobox(); 

	(function(jQuery) {
		//Scroll back to top
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function() {
			var scroll = jQuery(window).scrollTop();
			var height = jQuery(document).height() - jQuery(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		jQuery(window).scroll(updateProgress);
		var offset = 350;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: 0
			}, duration);
			return false;
		})
	})(jQuery);

	// Add Active Class
	jQuery('.overlay-menu ul').on('click', 'li', function() {
		jQuery('.overlay-menu ul li.active').removeClass('active');
		jQuery(this).addClass('active');
	});

	//hover direction
	jQuery(function() {
		jQuery('#da-thumbs .content').each(function() {
			jQuery(this).hoverdir();
		});
	});

	//  Toggle Accordion with classes
	jQuery("#accordion").on("hide.bs.collapse show.bs.collapse", function(e) {
		jQuery(e.target)
			.prev()
			.find("i")
			.toggleClass("ti-plus ti-minus");
	});
	
	jQuery("#accordion-v2").on("hide.bs.collapse show.bs.collapse", function(e) {
		jQuery(e.target)
			.prev()
			.find("i")
			.toggleClass("ti-plus ti-minus");
	});

	//Bootstrap collapse
	(function() {
		jQuery(".collapse").on("show.bs.collapse hide.bs.collapse", function(e) {
			if (e.type == 'show') {
				jQuery(this).prev().addClass('tc-activeaccordion');
			} else {
				jQuery(this).prev().removeClass('tc-activeaccordion');
			}
		});

	}).call(this);

	//Bootstrap collapse
	(function() {
		jQuery("#accordion-v2").on("show.bs.collapse hide.bs.collapse", function(e) {
			if (e.type == 'show') {
				jQuery(this).prev().addClass('tc-activeaccordionv2');
			} else {
				jQuery(this).prev().removeClass('tc-activeaccordionv2');
			}
		});

	}).call(this);



	//body scrollbar
	  var a = 0;
	  $(window).scroll(function() {
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
		  $('.counter-value').each(function() {
			var $this = $(this),
			  countTo = $this.attr('data-count');
			$({
			  countNum: $this.text()
			}).animate({
				countNum: countTo
			  },

			  {
				duration: 2000,
				easing: 'swing',
				step: function() {
				  $this.text(Math.floor(this.countNum));
				},
				complete: function() {
				  $this.text(this.countNum);
				}

			  });
		  });
		  a = 1;
		}

	  });
});