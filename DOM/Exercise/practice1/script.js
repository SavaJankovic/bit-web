var bg = document.querySelector(".wrap");
var mario = document.querySelector("#mario");
var marioRun = document.querySelector("#marioRun");
var bgImg = document.querySelector("#bgImg");
var left = 0;
var right = 0;



document.onkeydown = checkKey;

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '38') {
		// mario.style.display = "none";
		// marioRun.style.display = "block";
		// alert("gore");
	} else if (e.keyCode == '40') {
		// mario.style.display = "block";
		// marioRun.style.display = "none";
	} else if (e.keyCode == '39') {
		mario.style.display = "none";
		marioRun.style.display = "block";
		left -= 2;
		bgImg.style.left = left + "px";

	}
	// else if (e.keyCode == '39') {
	// 	right += 2;
	// 	bgImg.style.left = right + "px";
	// }

}