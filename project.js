function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function randomize() {
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	sleep(2000);
	document.getElementById("ColourBox").style.backgroundColor = randomColor;
	document.getElementById("ColorText").innerHTML = randomColor;
}
