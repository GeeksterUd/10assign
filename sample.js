const colorarr = ["red","yellow","blue","black","green","cyan","brown"];
const shape = document.getElementById("changeshape");
const color = document.getElementById("changecolor");
color.addEventListener("click", changeColor);
var i = 0;

function changeColor() {
  if (i === colorarr.length) {
    i=0;
  }
  document.getElementById("circle").style.backgroundColor = colorarr[i];
  i++;
}

