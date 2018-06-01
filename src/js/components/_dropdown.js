var dropdownTrig = $('.js-dropdown-btn');
var dropdowns = $('.js-dropdown');

dropdownTrig.on('click', function() {
  var parent = $(this).parents('.js-dropdown');
  var open = 'is-open';
  if (!parent.hasClass(open)) {
    dropdowns.removeClass(open);
    parent.addClass(open);
  } else {
    parent.removeClass(open);
  }   
  event.stopPropagation(); 
});
  

$('.js-btn').click(function() {
  var parent = $(this).parents('.js-dropdown');
  var trigger = parent.find('.js-dropdown-btn');
  var open = 'is-open';
  trigger.text($(this).text());
  parent.removeClass(open);
});


$('body').click(function() {
  dropdowns.removeClass('is-open');
});
