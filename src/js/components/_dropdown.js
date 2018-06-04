import { OPEN, BODY } from '../_constants';
var dropdownTrig = $('.js-dropdown-btn');
var dropdowns = $('.js-dropdown');
var btnFilters = $('.js-btn-filters');


dropdownTrig.on('click', function() {
  var parent = $(this).parents('.js-dropdown');
  
  if (!parent.hasClass(OPEN)) {
    dropdowns.removeClass(OPEN);
    parent.addClass(OPEN);
  } else {
    parent.removeClass(OPEN);
  }   
  event.stopPropagation(); 
});
  

btnFilters.click(function() {
  var parent = $(this).parents('.js-dropdown');
  var trigger = parent.find('.js-dropdown-btn');
  trigger.text($(this).text());
  parent.removeClass(OPEN);
});


BODY.click(function() {
  dropdowns.removeClass(OPEN);
});
