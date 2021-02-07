$(function () {


	// Fixed header
	let header = $('#header'),
		intro = $('#intro'),
		introH = intro.innerHeight(),
		scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on('scroll resize', function() {

		checkScroll(scrollPos, introH);

		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {

		if(scrollPos > introH) {

			header.addClass('fixed');

		} else {
			
			header.removeClass('fixed');

		}
	}

	// Smooth scroll

	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll'),
			elementOffset = $(elementId).offset().top;

		let nav = $('#nav');
		let navToggle = $('#nav-toggle');

		nav.removeClass('show')

		$('html, body').animate({
			scrollTop: elementOffset - 70
		}, 500);
	});

	// Nav toggle

	navToggle.on('click', function(event) {
		event.preventDefault();

		nav.toggleClass('show');
	})

	// Reviews: https://kenwheeler.github.io/slick/

	let slider = $('#reviews-slider');
		
	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true
	});


});
















































