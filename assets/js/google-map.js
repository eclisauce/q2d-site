function initMap() {

  var location = new google.maps.LatLng(55.713832, 13.215319);

  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: location,
    zoom: 15,
    panControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);


  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  var contentString = '<div class="info-window">' +
    '<h4>q2d Solutions AB</h4>' +
    '<p>Scheelevägen 17, 223 70 Lund </p>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}

google.maps.event.addDomListener(window, 'load', initMap);
