import Isotope from 'isotope-layout';
console.log('hello');



var iso = new Isotope( '.grid', {
  // options
  itemSelector: '.grid__col',
  masonry: {
    gutter: 70,
    horizontalOrder: true
  }
});

// bind filter button click
$('.js-filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  // filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});
