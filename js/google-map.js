var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 45.039555,
      lng: 38.969030
    },
    zoom: 17,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: map.center,
    map: map,
    title: 'Мы здесь!'
  });
}
