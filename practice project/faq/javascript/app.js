const upperBtn = document.querySelectorAll(".color-column button:first-child");
const lowerBtn = document.querySelectorAll(".color-column button:first-child");

const maxHeight = "calc(80vh - 52px)";
function handleUpperBtnClick() {}

function forEachUpper(item) {
  item.addEventListener("click", handleUpperBtnClick);
}
upperBtn.forEach((item) => forEachUpper(item));
