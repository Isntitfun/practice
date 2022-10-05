const btn = document.getElementById("btn");
const colors = [
  "#E6B0AA",
  "#7FB3D5",
  "#0B5345",
  "#7DCEA0",
  "#FEF5E7",
  "#E59866",
  "#ECF0F1",
  "#95A5A6",
  "#5D6D7E",
];
const body = document.body;
const color = document.querySelector(".color");

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function onBtnClick() {
  const selectedColor = randomColor();
  body.style.backgroundColor = selectedColor;
  color.innerText = selectedColor;
}

btn.addEventListener("click", onBtnClick);
