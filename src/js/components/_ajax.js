$('.js-form').submit(function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: 'send.php',
    data: formData,
    success: function() {
      console.log('Ваше сообщение отпрвлено!');
    },
    error: function() {
      console.log('Что-то пошло не так!');
    }
  });
});
