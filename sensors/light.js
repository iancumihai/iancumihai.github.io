var d = new Date();
document.getElementById("id_logic_level_version").innerHTML = 
	"Business level version:" + 
	d.getFullYear() + "." + d.getMonth() + "1" + "." + d.getDate()+".0";

window.addEventListener("devicelight", device_light);

function devicelight(e) 
{
	document.getElementById("id_light").innerHTML = 
	"value = " + e.value + "max = " + e.max;
}