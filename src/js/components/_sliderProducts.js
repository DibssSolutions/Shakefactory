import slick from 'slick-carousel';
var sliderProducts = $('.js-slider-products');
var sliderNav = $('.js-slider-nav');

sliderProducts.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.js-slider-nav'
});
sliderNav.slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.js-slider-products',
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});
