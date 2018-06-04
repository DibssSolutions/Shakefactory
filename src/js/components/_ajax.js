
console.log('hi');
$('#form').submit(function() {
  var form_data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: 'send.php',
    data: form_data,
    success: function() {}
  });
});
