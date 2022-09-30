jQuery(document).ready(function($){
	$(document).ready(function(){
		$('.slider-wrapper-home').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
     		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
		$('.main_nghien-cuu').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
      		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.main_project').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
      		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});		
		$('.slider_partner').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
      		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.single-other-document').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
      		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.main_hd').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
      		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.main_kehoach').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<i class="arrow right">',
			prevArrow: '<i class="arrow left">',
			infinite: true,
			pauseOnHover: false,
      		pauseOnFocus: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	});
});