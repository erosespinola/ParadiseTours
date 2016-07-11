
$(document).ready(function () {
	$("#lightgallery").lightGallery(); 
});

window.initMap = function() {
  var myLatLng = { lat: 20.6544684, lng: -105.2320376 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Paradise Tours Transportations'
  });
}

window.send = function() {
  var email = $('#email');
  var name = $('#name');
  var subject = $('#subject');
  var message = $('#message');

  
  $("#email-group").removeClass("has-error");
  $("#name-group").removeClass("has-error");
  $("#subject-group").removeClass("has-error");
  $("#message-group").removeClass("has-error");
    
  if (!email.val())
    $("#email-group").addClass("has-error");
  if (!name.val())
    $("#name-group").addClass("has-error");
  if (!subject.val())
    $("#subject-group").addClass("has-error");
  if (!message.val())
    $("#message-group").addClass("has-error");
}