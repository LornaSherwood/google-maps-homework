var MapWrapper = function(coords, zoom, container){
  
  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  }); //where to put, what place, zoom


}

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    return marker;
  },

  addClickEvent: function(){

    google.maps.event.addListener(this.googleMap, 'click', function(event){
    var position = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    var marker = this.addMarker(position);

    var contentString = "You have chosen - Latitude: " + position.lat.toFixed(4) + " Longitude: " + position.lng.toFixed(4);
    var infowindow = new google.maps.InfoWindow({
       content: contentString
     });
    infowindow.open(this.googleMap, marker);
    //setTimeout(infowindow.close, 5000);

    // console.log(event);
    // console.log(event.latLng.lat());
    // console.log(event.latLng.lng());
    }.bind(this));
  },

}

