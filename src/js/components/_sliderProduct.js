import slick from 'slick-carousel';
$('.js-slider-product').slick({
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: '<button type="button" class="slider__prev"><svg class="icon icon-arrow"><use xlink:href="img/sprite.svg#icon-arrow"></use></svg></button',
			 nextArrow: '<button type="button" class="slider__next"><svg class="icon icon-arrow"><use xlink:href="img/sprite.svg#icon-arrow"></use></svg></buttont',
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
