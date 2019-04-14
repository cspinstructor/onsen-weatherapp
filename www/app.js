function sayHello() {
  ons.notification.alert('Button is tapped!');
  var txtCity = $('#txtCity').val();
  $('#result').html(txtCity);
}
