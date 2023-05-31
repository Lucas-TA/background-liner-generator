var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

    color1.value = "#00ff00";
    color2.value = "#ff0000";
    css.textContent = "linear-gradient(to right, rgb(0,255,0), rgb(255,0,0));";

function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")";

    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
