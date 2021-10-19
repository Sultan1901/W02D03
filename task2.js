// 1
const bt = document.querySelector("#b1");
const hhh = document.querySelectorAll("h1");
bt.addEventListener("click", b1);

function b1() {
  hhh.forEach((element) => {
    element.style.fontSize = "50px";
  });
}

// 2
const bt1 = document.querySelector("#b2");
const p1 = document.querySelectorAll("p");
bt1.addEventListener("click", bt2);
function bt2() {
  p1.forEach((element) => {
    element.style.color = "blue";
  });
}
// 3
const bt3 = document.querySelector("#b3");
const p3 = document.querySelectorAll("p");
bt3.addEventListener("click", bt4);
function bt4() {
  p3.forEach((element) => {
    element.style.backgroundColor = "green";
  });
}

// 4
const b5 = document.querySelector("#b4");
const img1 = document.querySelector("img");
b5.addEventListener("click", b55);
function b55() {
  img1.style.visibility = "hidden";
}
