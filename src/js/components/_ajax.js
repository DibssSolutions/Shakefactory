$('.js-form').submit(function(e) {
  e.preventDefault();
  var form_data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: 'send.php',
    data: form_data,
    contentType: 'application/json',
    success: function() {
    }
  });
});
