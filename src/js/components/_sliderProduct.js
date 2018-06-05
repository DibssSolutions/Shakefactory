import slick from 'slick-carousel';
$('.js-slider-product').slick({
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: '<button type="button" class="slider__prev"><svg xmlns="http://www.w3.org/2000/svg" width="54.02" height="57.98" viewBox="0 0 54.02 57.98"><defs><style>.cls-1{fill:#1e8bf0;}</style></defs><title>arrow</title><path  d="M28.29,0l4.5,4.62L9,29l23.8,24.4L28.29,58,0,29ZM49.51,0,54,4.63,30.21,29,54,53.38,49.51,58,21.21,29Z" transform="translate(0.01 -0.01)"/></svg></button',
			 nextArrow: '<button type="button" class="slider__next"><svg xmlns="http://www.w3.org/2000/svg" width="54.02" height="57.98" viewBox="0 0 54.02 57.98"><defs><style>.cls-1{fill:#1e8bf0;}</style></defs><title>arrow</title><path  d="M28.29,0l4.5,4.62L9,29l23.8,24.4L28.29,58,0,29ZM49.51,0,54,4.63,30.21,29,54,53.38,49.51,58,21.21,29Z" transform="translate(0.01 -0.01)"/></svg></buttont',
			 responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			      	 slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			      	 slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			      	 slidesToShow: 1,
			      }
			    }
			    ]
});
