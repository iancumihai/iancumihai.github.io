document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.12.06.0"; 

navigator.geolocation.watchPosition(on_gps_success, on_gps_error);

var marker;
//-----------------------------------------------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = 
	"lat = " + p.coords.latitude + 
	"<br>long = " + p.coords.longitude + 
	"<br>accuracy = " + p.coords.accuracy + " m" + 
	"<br>altitude = " + p.coords.altitude + " m" + 
	"<br>speed = " + p.coords.speed + " m/s";

	var map_obj = new google.maps.Map(document.getElementById("id_map"));
	map_obj.setCenter({lat:p.coords.latitude, lng:p.coords.longitude});
	map_obj.setZoom(10);

	marker = new google.maps.Marker({
    position: {lat:p.coords.latitude, lng:p.coords.longitude},
    animation: google.maps.Animation.DROP,
    title: 'LMM!',
    map: map_obj
  	});
  	marker.addListener("click", on_marker_click);
}
//-----------------------------------------------------------------------------
function on_gps_error(e)
{
	allert(e.code);
}
//-----------------------------------------------------------------------------
function on_marker_click() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}