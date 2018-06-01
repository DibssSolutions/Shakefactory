import Isotope from 'isotope-layout';

var iso = new Isotope( '.grid', {
  // options 
  itemSelector: '.grid__col',
  masonry: {
    // gutter: 70,
    horizontalOrder: true,
    columnWidth: 190,
    isFitWidth: true
  },
  // layoutMode: 'vertical',
  // vertical: {
  //   horizontalAlignment: 0.5,
  // }
});

// bind filter button click
$('.js-filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  // filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
