import Isotope from 'isotope-layout';


var container = document.querySelector('.js-grid');
var item = document.querySelector('.js-grid-col');
var itemString = '.js-grid-col';
var filters = $('.js-filters');
var btnFilters = '.js-btn-filters';
var checked = 'is-checked';

if (container && item) {
  var iso = new Isotope(container, {
    itemSelector: itemString,
    masonry: {
      horizontalOrder: true,
      columnWidth: 165,
      isFitWidth: true
    }
  });

  // bind filter button click
  filters.on( 'click', btnFilters, function() {
    var filterValue = $( this ).attr('data-filter');
    iso.arrange({ filter: filterValue });
  });

  filters.each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', btnFilters, function() {
      $buttonGroup.find('.is-checked').removeClass(checked);
      $( this ).addClass(checked);
    });
  });
};


