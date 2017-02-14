var initialize = function(){
  var center = {lat: 40.712274, lng: -74.00594};
  var zoom = 10;
  var container = document.getElementById('main-map');
  var mainmap = new MapWrapper(center, zoom, container);
  var button = document.querySelector('button');

  

  var handleButtonClick = function(){
    var center = {lat: 57.813532, lng: -8.585495};
    var zoom = 6;
    var container = document.getElementById('main-map');
    var newMap = new MapWrapper(center, zoom, container);

    var marker = newMap.addMarker(center);
    newMap.addClickEvent();

    var contentString = "St Kilda is the most remote part of the UK";
    var infowindow = new google.maps.InfoWindow({
       content: contentString
     });
    infowindow.open(this.googleMap, marker);
    
};

  mainmap.addMarker(center);
  mainmap.addClickEvent();
  button.onclick = handleButtonClick;




};

window.onload = initialize;
