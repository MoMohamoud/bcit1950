var seconds_left = 70;
var interval = setInterval(function() {
    --seconds_left;
	if (seconds_left < 60){
	document.getElementById('timeLeft').innerHTML = "Time left:" + seconds_left; 
	}
    if (seconds_left <= 30)
    {
		setTimeout(window.location="http://www.bcitcomp.ca",10);
        document.getElementById('timeLeft').innerHTML = "You are ready";
        clearInterval(interval);
    }
}, 1000);