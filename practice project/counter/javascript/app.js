const value = document.querySelector(".counts");
const btn = document.querySelectorAll(".btn");
let count = 0;

function handleBtnClick(event) {
  const clickedBtn = event.target.classList;
  if (clickedBtn.contains("decrease")) {
    count--;
  } else if (clickedBtn.contains("increase")) {
    count++;
  } else {
    count = 0;
  }
  value.textContent = count;
  value.style.opacity = 0.5 + count * 0.02;
}

function forEachBtn(item) {
  item.addEventListener("click", handleBtnClick);
}

btn.forEach((item) => forEachBtn(item));
