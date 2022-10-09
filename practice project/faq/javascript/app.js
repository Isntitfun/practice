const colorSourceB = [
  "#EAF2F8",
  "#D4E6F1",
  "#A9CCE3",
  "#7FB3D5",
  "#5499C7",
  "#2980B9",
  "#2471A3",
  "#1F618D",
  "#1A5276",
  "#154360",
];

const colorSourceC = [
  "#FDFEFE",
  "#FBFCFC",
  "#F7F9F9",
  "#F4F6F7",
  "#F0F3F4",
  "#ECF0F1",
  "#D0D3D4",
  "#B3B6B7",
  "#979A9A",
  "#7B7D7D",
];
const container = document.querySelector(".color-container");
const upperBtn = document.querySelectorAll(".color-column button:first-child");
const lowerBtn = document.querySelectorAll(".color-column button:last-child");

function randomHexVariable() {
  return colorSource[Math.floor(Math.random() * colorSource.length)];
}
function randomColorGenB() {
  return colorSourceB[Math.floor(Math.random() * colorSourceB.length)];
}

function randomColorGenC() {
  return colorSourceC[Math.floor(Math.random() * colorSourceC.length)];
}

function randomLengthGen() {
  const randomLengthNumber = Math.floor(Math.random() * 600);
  return randomLengthNumber;
}

function lowerBtnActive(targetColor) {
  const randomLengthTemp = randomLengthGen();
  const randomColor = randomColorGenC();
  const randomLength = `${randomLengthTemp}px`;
  const randomTranslate = `${0 - randomLengthTemp - 12}px`;

  targetColor.style.height = randomLength;
  targetColor.style.backgroundColor = randomColor;
  targetColor.style.transform = `translateY(${randomTranslate})`;
}

function upperBtnActive(targetColor) {
  const randomLengthTemp = randomLengthGen();
  const randomColor = randomColorGenB();
  const randomLength = `${randomLengthTemp}px`;
  const randomTranslate = `${0 - randomLengthTemp - 2}px`;

  targetColor.style.height = `${randomLengthTemp}px`;
  targetColor.style.backgroundColor = randomColor;
}

function selectColumn() {
  const upDown = [upperBtn, lowerBtn];
  let randomLineNumber = Math.floor(Math.random() * 2);
  const randomLine = upDown[randomLineNumber];
  const randomTargetNumber = Math.floor(Math.random() * randomLine.length);
  const target = randomLine[randomTargetNumber];
  const targetColor = target.querySelector(".color");

  if (randomLineNumber === 0) {
    upperBtnActive(targetColor);
    lowerBtn[randomTargetNumber].querySelector(".color").style.height = "0";
  } else {
    lowerBtnActive(targetColor);
    upperBtn[randomTargetNumber].querySelector(".color").style.height = "0";
  }

  target.style.backgroundColor = "rgba(233, 215, 156, 0.5)";

  setTimeout(function () {
    target.style.backgroundColor = "rgb(101, 139, 131, 0.5)";
  }, 100);
}

function handleContainerMouseover() {
  timer = setInterval(selectColumn, 1);
}

function handleContainerMouseout() {
  clearInterval(timer);
}

// function forEachUpper(item) {
//   item.addEventListener("mouseover", handleUpperBtnClick);
// }
// upperBtn.forEach((item) => forEachUpper(item));

container.addEventListener("mouseover", handleContainerMouseover);
container.addEventListener("mouseout", handleContainerMouseout);
