document.addEventListener("contextmenu", (event) => event.preventDefault());

var started = false;

var audio = new Audio("https://cdn.discordapp.com/attachments/1147284184805683302/1203391559723384923/spotifydown.com_-_must_be_nice.mp3?ex=65d0ecb9&is=65be77b9&hm=b25117a3bae1e48b7d466b53decfeb875b0fe83e04df7f03c4fe75330d01bcfa&");
function play() {
	started = !started;
	if (started) {
		audio.volume = 0.25;
		audio.play();
		document.getElementById("playbutton").style.display = "none";
		document.getElementById("pausebutton").style.display = "block";
	} else {
		audio.pause();
		document.getElementById("playbutton").style.display = "block";
		document.getElementById("pausebutton").style.display = "none";
	}
}

