window.addEventListener('deviceorientation', ondeviceorientation);

//---------------------------------------------------------------
function ondeviceorientation(event) 
{ 
	document.getElementById("id_alpha").innerHTML = Math.rand(event.alpha * 100) / 100;
	document.getElementById("id_beta").innerHTML = Math.rand(event.beta * 100) / 100;
	document.getElementById("id_gamma").innerHTML = Math.rand(event.gamma * 100) / 100;
}

//---------------------------------------------------------------