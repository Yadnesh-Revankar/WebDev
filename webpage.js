var h1 = document.querySelector("h1");
var p = document.querySelector("p");

addClass();

function addClass(){
  h1.classList.add("selected");
  p.classList.add("selected", "blurb");
}
