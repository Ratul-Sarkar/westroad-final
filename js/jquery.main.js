// page init
jQuery(function(){
	"use strict";

	initTabs();
	initIsoTop();
	initCounter();
	initbackTop();
	initMarquee();
	initTouchNav();
	initAddClass();
	initLightbox();
	initGoogleMap();
	initCountDown();
	initSlickSlider();
	initStyleChanger();
	initStickyHeader();
	

	// style changer
	function initStyleChanger() {
		
		"use strict";

		var element = jQuery('#style-changer');

		if(element) {
			$.ajax({
				url: element.attr('data-src'),
				type: 'get',
				dataType: 'text',
				success: function(data) {
					var newContent = jQuery('<div>', {
						html: data
					});

					newContent.appendTo(element);
				}
			});
		}
	}

	jQuery(window).on('load', function() {
		"use strict";

		initIsoTop();
		initPreLoader();
		new WOW().init();
		initStickyHeader();
	});

	// PreLoader init
	function initPreLoader() {
		"use strict";

		jQuery('#pre-loader').delay(1000).fadeOut();
	}

	// Slick Slider init
	function initSlickSlider() {
		"use strict";

		jQuery('.slider-ar').slick({
			speed: 100,
			dots: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			autoplaySpeed: 4000,
			adaptiveHeight: true
		});
		jQuery('.sliderfade-ar').slick({
			speed: 800,
			fade: true,
			dots: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			autoplaySpeed: 4000,
			adaptiveHeight: true
		});
		jQuery('.slider-pg').slick({
			dots: true,
			speed: 800,
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			autoplaySpeed: 4000,
			adaptiveHeight: true
		});
		jQuery('.sliderfade-pg').slick({
			dots: true,
			speed: 800,
			fade: true,
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			autoplaySpeed: 4000,
			adaptiveHeight: true
		});
		jQuery('.slider-blog').slick({
			speed: 800,
			dots: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 2,
			autoplaySpeed: 4000,
			prevArrow: '<button type="button" class="slick-prev">Prev</button>',
			adaptiveHeight: true,
			responsive: [
				{
				  breakpoint: 500,
				  settings: {
				    slidesToShow: 1,
				    slidesToScroll: 1
				  }
				}
			]
		});
		jQuery('.test-slider').slick({
			speed: 800,
			dots: true,
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			autoplaySpeed: 4000,
			adaptiveHeight: true
		});
		jQuery('.wedo-slider').slick({
			speed: 800,
			dots: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 3,
			autoplaySpeed: 4000,
			prevArrow: '<button type="button" class="slick-prev">Prev</button>',
			adaptiveHeight: true,
			responsive: [
				{
				  breakpoint: 767,
				  settings: {
				    slidesToShow: 2,
				    slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 500,
				  settings: {
				    slidesToShow: 1,
				    slidesToScroll: 1
				  }
				}
			]
		});
		jQuery('.team-slider').slick({
			speed: 800,
			dots: true,
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 3,
			autoplaySpeed: 4000,
			adaptiveHeight: true,
			responsive: [
				{
				  breakpoint: 767,
				  settings: {
				    slidesToShow: 2,
				    slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 500,
				  settings: {
				    slidesToShow: 1,
				    slidesToScroll: 1
				  }
				}
			]
		});
		jQuery('.p-detail-for').slick({
			fade: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.p-slider-nav'
		});
		jQuery('.p-slider-nav').slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.p-detail-for',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			focusOnSelect: true
		});
		jQuery('.p-detail-slider').slick({
			dots: true,
			slidesToShow: 1,
			centerMode: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			centerPadding: '25%',
			responsive: [
				{
				  breakpoint: 991,
				  settings: {
					centerPadding: '15%'
				  }
				},
				{
				  breakpoint: 500,
				  settings: {
					centerPadding: '0'
				  }
				}
			]
		});
	}

	// Add Class  init
	function initAddClass() {
		"use strict";

		jQuery('.nav-opener').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
		jQuery('.search-opener').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("search-active");
		});
		jQuery('.drop-link').on( "click", function(e){
			e.preventDefault();
			jQuery(this).next().toggleClass("open");
		});
	}

	// sticky header init
	function initStickyHeader() {
		"use strict";

		var win = jQuery(window),
			stickyClass = 'sticky';

		jQuery('#header').each(function() {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 200;
			var flag = true;

			jQuery(this).css('height' , jQuery(this).innerHeight());

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag){
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}

	// backtop init
	function initbackTop() {
		"use strict";

		var jQuerybackToTop = jQuery("#back-top");
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuerybackToTop.addClass('active');
			} else {
				jQuerybackToTop.removeClass('active');
			}
		});
		jQuerybackToTop.on('click', function(e) {
			jQuery("html, body").animate({scrollTop: 0}, 900);
		});
	}

	// modal popup init
	function initLightbox() {
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			helpers: {
				overlay: {
					css: {
						background: 'rgba(0, 0, 0, 0.65)'
					}
				}
			},
			afterLoad: function(current, previous) {
				// handle custom close button in inline modal
				if(current.href.indexOf('#') === 0) {
					jQuery(current.href).find('a.close').off('click.fb').on('click.fb', function(e){
						e.preventDefault();
						jQuery.fancybox.close();
					});
				}
			},
			padding: 0
		});
	}

	// IsoTop init
	function initIsoTop() {
		"use strict";

		// Isotope init
		var isotopeHolder = jQuery('#isotop-holder'),
			isotopeHolde2 = jQuery('#isotop-holder2'),
			isotopeHolde3 = jQuery('#isotop-holder3'),
			win = jQuery(window);
		jQuery('.isoto-filter a').on( "click", function(e){
			e.preventDefault();
			
			jQuery('.isoto-filter li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			var selector = jQuery(this).attr('data-filter');
			isotopeHolder.isotope({ filter: selector });
			isotopeHolde2.isotope({ filter: selector });
			isotopeHolde3.isotope({ filter: selector });
		});
		jQuery('#isotop-holder').isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			transitionDuration: '0.6s',
			masonry: {
				columnWidth: '.item'
			}
		});
		jQuery('#isotop-holder2').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows',
			transitionDuration: '0.6s'
		});
		jQuery('#isotop-holder3').isotope({
			itemSelector: '.post',
			layoutMode: 'masonry',
			transitionDuration: '0.6s',
			masonry: {
				columnWidth: '.post'
			}
		});
	}

	// Counter init
	function initCounter() {
		"use strict";

		jQuery('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}

	// running line init
	function initMarquee() {
		"use strict";

		jQuery('.line-box').marquee({
			line: '.line',
			animSpeed: 50
		});
	}

	// content tabs init
	function initTabs() {
		"use strict";

		jQuery('ul.tabset').tabset({
			tabLinks: 'a',
			defaultTab: false
		});
	}

	// handle dropdowns on mobile devices
	function initTouchNav() {
		"use strict";

		jQuery('#nav').each(function(){
			new TouchNav({
				navBlock: this
			});
		});
	}

	// scrollIt init
	jQuery.scrollIt({
		topOffset: -91,
		scrollTime: 1500,
		easing: 'easeInOutExpo'
	});

	// GoogleMap init
	function initGoogleMap() {
		"use strict";
		
		jQuery('.map').googleMapAPI({
			marker: 'images/icons/img01.png',
			mapInfoContent: '.map-info',
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			panControl: false,
			zoomControl: false
		});
	}

	// count down init
	function initCountDown() {
		"use strict";

		var newDate = new Date(2017, 4, 18);
		
		jQuery('#countdown').countdown({until: newDate});
	}
});