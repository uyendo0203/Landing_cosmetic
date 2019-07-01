$('.cosmetic__slider-item').slick({
	slidesToShow: 1,
	dots: true,
	slidesToScroll: 1,
	asNavFor: '.cosmetic__slider-nav',
	prevArrow: `<div class="cosmetic__pre-button"><img src="/assets/images/arrow-left.png"/></div>`,
	nextArrow: `<div class="cosmetic__next-button"><img src="/assets/images/arrow-right.png"/></div>`
});

$('.cosmetic__slider-nav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.cosmetic__slider-item'
});


$(window).on('load', function () {
	$('.submit-all').attr('disabled', 'disabled');

	$('.form-submit [name="name"]').on('keyup', function () {
		var name = $(this).val();
		var phone = jQuery('.form-submit [name="phone"]').val();

		if (name.length != 0 && phone.length == 10) {
			$('.submit-all').removeAttr("disabled");
		} else {
			$('.submit-all').attr('disabled', 'disabled');
		}

	});

	$('.form-submit [name="phone"]').on('keyup', function () {
		var phone = $(this).val();
		var name = jQuery('.form-submit [name="name"]').val();

		if (name.length != 0 && phone.length == 10) {
			$('.submit-all').removeAttr("disabled");
		} else {
			$('.submit-all').attr('disabled', 'disabled');
		}
	});

});