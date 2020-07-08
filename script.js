var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
} 

function randomColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	//console.log(randomColor);
	return randomColor;
}

function setRandomColor1() {
	color1.value = "#" + randomColor();
	setGradient();
}

function setRandomColor2() {
	color2.value = "#" + randomColor();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button1.addEventListener("click", setRandomColor1);

button2.addEventListener("click", setRandomColor2);