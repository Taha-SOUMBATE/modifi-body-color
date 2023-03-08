let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");

color1.addEventListener("input", () => {
  body.style = `background:linear-gradient(to right,${color1.value},${color2.value}`;
  color1.style = `background-color:${color1.value}`;
  p1.innerText = color1.value;
});
color2.addEventListener("input", () => {
  body.style = `background:linear-gradient(to right,${color1.value},${color2.value}`;
  color2.style = `background-color:${color2.value}`;
  p2.innerText = color2.value;
});
