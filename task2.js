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
    element.style.backgroundColor = "brown";
  });
}

// 4
const b5 = document.querySelector("#b4");
const img1 = document.querySelectorAll("img");
b5.addEventListener("click", b55);
function b55() {
  
    img1.style.visibility = "hidden";
  ;
}

// 5
const b11 = document.querySelector("#b5");
const chimg1 = document.querySelector("#img1");
const chimg2 = document.querySelector("#img2");
b11.addEventListener("click", b66);
function b66() {
  chimg1.style.margin = "120px";

  chimg2.style.top = "-500px";
}
// 6
submitBtn.addEventListener("click", () => {
  if (value) {
    alert("Data saved.");
  } else {
    alert("It is Empty");
  }
});

// 7

const alret1 = document.querySelectorAll("img");
alret1.forEach((ele) => {
  ele.addEventListener('click' ,b77);
  function b77() {
    alert('you clicked')
  }
});

// 8 

const inp = document.querySelector('input')
inp.addEventListener('click', o99)
function o99(){
  alert('start write')
}

// 9
const aler4 = document.querySelector("body")
alert('yor page loaded')

// 10

const chco = document.querySelectorAll('p')
chco.forEach((element) => {
  element.addEventListener('mouseenter', () =>{
    element.style.background = "red"
  })
}
 

  
    
  








  


