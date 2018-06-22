$(document).ready(function() {
  $('.js-form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    var urlPhpFile;
    if ($('.js-form').hasClass('is-contact')) {
      urlPhpFile = 'send.php';
    } else if ($('.js-form').hasClass('is-product')) {
      urlPhpFile = 'products.php';
    }
    $.ajax({
      type: 'POST',
      url: urlPhpFile,
      data: formData,
      success: function() {
        var container = $('.js-form');
        container.each(function() {
          var form = $(this);
          var button = form.find('.js-btn-submit');
          button.attr('disabled', 'disabled');
	        var sentMessage = $('.js-success');

	          container.get(0).reset();
	          sentMessage.fadeIn(200);
	          sentMessage.fadeOut(5000);
        });
      },
      error: function(jqXHR, ajaxSettings, thrownError) {
        var errorSent = $('.js-success-error');

        errorSent.fadeIn(200);
        errorSent.fadeOut(5000);

        if (jqXHR.status === 0) {
          errorSent.text('Not connect.\n Verify Network.');
        } else if (jqXHR.status === 404) {
          errorSent.text('Requested page not found. 404');
        } else if (jqXHR.status === 500) {
          errorSent.text('Internal Server Error 500.');
        } else if (exception === 'parsererror') {
          errorSent.text('Requested JSON parse failed.');
        } else if (exception === 'timeout') {
          errorSent.text('Time out error.');
        } else if (exception === 'abort') {
          errorSent.text('Ajax request aborted.');
        } else {
          errorSent.text('Uncaught Error.\n' + jqXHR.responseText);
        }
      }
    });
  });
}); 
