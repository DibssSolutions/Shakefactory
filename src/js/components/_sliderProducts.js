import slick from 'slick-carousel';

$('.js-slider-products').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.js-slider-nav'
});
$('.js-slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.js-slider-products',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
