
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