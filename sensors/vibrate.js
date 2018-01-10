var d = new Date();
document.getElementById("id_logic_level_version").innerHTML = 
	"Business level version:" + 
	d.getFullYear() + "." + d.getMonth() + "1" + "." + d.getDate()+".2";

document.addEventListener("touchstart", vibrate);

function vibrate()
{
	windows.navigator.vibrate([200, 200, 500, 200, 1000]);
}