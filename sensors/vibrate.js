var d = new Date();
document.getElementById("id_logic_level_version").innerHTML = 
	"Business level version:" + 
	d.getFullYear() + "." + d.getMonth() + "1" + "." + d.getDate()+".3";

document.addEventListener("touchstart", start_timer);
document.addEventListener("touchend", stop_timer);

var timer_id;
//-------------------------------------------------------------------------
function start_timer()
{
	timer_id = setInterval(vibrate, 200);
}
//-------------------------------------------------------------------------
function stop_timer()
{
	clearInterval(timer_id);
}
//-------------------------------------------------------------------------
function vibrate()
{
	window.navigator.vibrate(300);
}

