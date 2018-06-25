import validate from 'jquery-validation'; 

$.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
};

var container = $('.js-form');
container.each(function() {
  var form = $(this);
  form.validate();	
  var input = form.find('input');
  var button = form.find('.js-btn-submit');
  input.on('blur', function() {
	  if (form.valid()) {
      button.prop('disabled', false);
	  } else {
      button.prop('disabled', 'disabled');
	  }
  });

});
