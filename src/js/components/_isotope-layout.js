import Isotope from 'isotope-layout';
console.log('hello');



var iso = new Isotope( '.grid', {
  // options
  itemSelector: '.grid__col',
  layoutMode: 'fitRows'
});

// bind filter button click
$('.js-filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
