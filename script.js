var css = document.querySelector("h3");
var button1 = document.querySelector(".color1");
var button2 = document.querySelector(".color2");
var body = document.getElementById("generator");

function detectChange()
{
	body.style.background= "linear-gradient(to right, "+button1.value+ ", "+button2.value;
	css.innerHTML = body.style.background ;
	//css.textContent = body.style.background;
}

button1.addEventListener("input",detectChange);
button2.addEventListener("input",detectChange);