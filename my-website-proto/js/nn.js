$grid.isotope({ filter: '.metal' });

// filter .alkali OR .alkaline-earth items
$grid.isotope({ filter: '.alkali, .alkaline-earth' });

// filter .metal AND .transition items
$grid.isotope({ filter: '.metal.transition' });

// show all items
$grid.isotope({ filter: '*' });
$grid.isotope({
  // filter element with numbers greater than 50
  filter: function() {
    // _this_ is the item element. Get text of element's .number
    var number = $(this).find('.number').text();
    // return true to show, false to hide
    return parseInt( number, 10 ) > 50;
  }
})
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// hash of functions that match data-filter values
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // use filter function if value matches
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});