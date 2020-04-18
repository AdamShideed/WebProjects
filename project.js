function randomize() {
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	document.getElementById("ColourBox").style.backgroundColor = randomColor;
	document.getElementById("ColorText").innerHTML = randomColor;
}