function getFullScreenHTML() {
	var elem = document.getElementById("gm4html5_div_id");
        return (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement);
}