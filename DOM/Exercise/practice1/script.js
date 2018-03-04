var bg = document.querySelector(".wrap");
var mario = document.querySelector("#mario");
var marioRun = document.querySelector("#marioRun");

var left = 0;
var right = 0;
var run;
bg.style.backgroundPositionX = "100px";

document.onkeydown = checkKey;

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '39') {
		mario.style.display = "none";
		marioRun.style.display = "block";
		run = setInterval(function () {
			bg.style.backgroundPositionX = (parseInt(bg.style.backgroundPositionX) - 10) + 'px';
		}, 200);

	} else if (e.keyCode == '27') {
		mario.style.display = "block";
		marioRun.style.display = "none";
		marioJump.style.display = "none";
		clearInterval(run);
	}
};
//  else if (e.keyCode == '40') {
// 	// mario.style.display = "block";
// 	// marioRun.style.display = "none";
// } else
// else if (e.keyCode == '39') {
// 	right += 2;
// 	bgImg.style.left = right + "px";
// }