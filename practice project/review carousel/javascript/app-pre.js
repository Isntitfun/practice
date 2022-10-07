const btn = document.querySelectorAll(".btn");
const dot = document.querySelector(".dot");
const contents = document.querySelectorAll(".img-plate");

let slides = 0;

function hideALLContents(item) {
  item.classList.add("hidden");
}

function handleBtnClick(event) {
  const target = event.currentTarget.classList;
  contents.forEach((item) => hideALLContents(item));

  console.log(contents);

  if (target.contains("next")) {
    slides++;
  } else if (target.contains("prev")) {
    slides--;
  } else {
    slides = Math.floor(Math.random() * contents.length);
  }
  contents[slides].classList.remove("hidden");
}

function forEachBtn(item) {
  item.addEventListener("click", handleBtnClick);
}
btn.forEach((item) => forEachBtn(item));
