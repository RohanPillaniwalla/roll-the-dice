function generateResults() {
	//1-6
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	//images/dice1.png - images/dice6.png
	var randomImageSource = 'images/dice' + randomNumber1 + '.png';
	var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

	// set the random images
	var image1 = document.querySelector('.img1');
	image1.setAttribute('src', randomImageSource);

	document.querySelector('.img2').setAttribute('src', randomImageSource2);

	// winning logic
	if (randomNumber1 > randomNumber2) {
		document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!';
	} else if (randomNumber2 > randomNumber1) {
		document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
	} else {
		document.querySelector('h1').innerHTML = 'Draw!';
	}
}
