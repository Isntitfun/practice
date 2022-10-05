const btn = document.getElementById("btn");
const variables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.body;
const color = document.querySelector(".color");

// function rv() {
//   return variables[Math.floor(Math.random() * variables.length)];
// }
// function randomHex() {
//   const hex = `#${rv()}${rv()}${rv()}${rv()}${rv()}${rv()}`;
//   return hex;
// }

// function onBtnClick() {
//   const selectedColor = randomHex();
//   body.style.backgroundColor = selectedColor;
//   color.innerText = selectedColor;
// }

// btn.addEventListener("click", onBtnClick);

function randomVariables() {
  return variables[Math.floor(Math.random() * variables.length)];
}

function randomHex() {
  let hex = `#`;
  for (i = 0; i < 6; i++) {
    hex += randomVariables();
  }
  return hex;
}

function onBtnClick() {
  const selectedColor = randomHex();
  body.style.backgroundColor = selectedColor;
  color.innerText = selectedColor;
}

btn.addEventListener("click", onBtnClick);
