document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.12.06.1"; 



navigator.geolocation.getCurrentPosition(on_gps_success, on_gps_error);

//-----------------------------------------------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = 
	"lat = " + p.coords.latitude + 
	"<br>long = " + p.coords.longitude + 
	"<br>accuracy = " + p.coords.accuracy + "m" + 
	"<br>altitude= " + p.coords.altitude + "m" ;

	var map_str = "https://maps.googleapis.com/maps/api/staticmap?markers=color:blue|"+p.coords.latitude+","+p.coords.longitude+"&zoom=15&size=320x240&key=AIzaSyAX-afGftQdoSsjJ20r40gdPpiRS7MMlag";

	document.getElementById("id_gps_img").setAttribute("src", map_str);
}
//-----------------------------------------------------------------------------
function on_gps_error(e)
{
	allert(e.code);
}
//-----------------------------------------------------------------------------
