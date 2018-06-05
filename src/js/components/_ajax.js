$('.js-form').submit(function() {
  // e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: 'send.php',
    data: formData,
    success: function() {
      var sentMessage = $('.js-success');

      $('form').get(0).reset();
      sentMessage.fadeIn(200);
      sentMessage.fadeOut(5000);
      console.log('Ваше сообщение отпрвлено!');
    },
    error: function() {
      // form.reset();
      var errorSent = $('.js-success-error');

      errorSent.fadeIn(200);
      errorSent.fadeOut(5000);
      console.log('Что-то пошло не так!');
    }
  });
});
