
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
};

window.send = function() {
  var name = $('#name');
  var subject = $('#subject');
  var message = $('#message');
  var email = $("#email");
  var hasError = false;
  $("#name-group").removeClass("has-error");
  $("#subject-group").removeClass("has-error");
  $("#message-group").removeClass("has-error");
  $("#email-group").removeClass("has-error");
  if (!email.val()) {
    $("#email-group").addClass("has-error");
    hasError = true;
  }
  if (!name.val()) {
    $("#name-group").addClass("has-error");
    hasError = true;
  }
  if (!subject.val()) {
    $("#subject-group").addClass("has-error");
    hasError = true;
  }
  if (!message.val()) {
    $("#message-group").addClass("has-error");
    hasError = true;
  }
  if (!hasError) {
    var text = 'Nombre: ' + name.val() + ', Email: ' + email.val() + ', Mensaje: ' + message.val();
    var request = $.post( "http://paradisetourstransportations.com/email", {
      subject: subject.val(),
      email: email.val(),
      text: text
    });
    var lang = 'es';
    var query = window.location.search.split('lang=');
    if (query.length === 2) {
      lang = query[1];
    }
    request.done(function() {
      if (lang === 'es') {
        alert('Su mensaje ha sido envido. Pronto nos pondremos en contacto con usted.');
      } else if (lang === 'en') {
        alert('Your message has been sent. We will contact you soon.');
      } else {
        alert('Su mensaje ha sido envido. Pronto nos pondremos en contacto con usted.');
      }
    })
    .fail(function() {
      if (lang === 'es') {
        alert('Su mensaje no pudo ser envido. Por favor contáctenos por teléfono.');
      } else if (lang === 'en') {
        alert('Your message could not been sent. Please contact us by phone.');
      } else {
        alert('Su mensaje no pudo ser envido. Por favor contáctenos por teléfono.');
      }
    })
    .always(function() {
      name.val('');
      email.val('');
      message.val('');
      subject.val('');
      $("#name-group").removeClass("has-error");
      $("#subject-group").removeClass("has-error");
      $("#message-group").removeClass("has-error");
      $("#email-group").removeClass("has-error");
    });
  }
};

localStorage['lang'] = 'es';
