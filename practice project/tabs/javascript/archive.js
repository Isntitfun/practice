const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const archiveContainer = document.querySelector(".archive-container");

// Archive load ==============================================
const handleDomLoad = () => {
  const HtmlDataString = imageArray
    .map((item) => {
      return `<div class="img-box img-box${item}"></div>`;
    })
    .join("");
  archiveContainer.innerHTML = HtmlDataString;

  const imgBox = document.querySelectorAll(".img-box");
  const archiveInput = () => {
    imageArray.forEach((item) => {
      imgBox[item - 1].style.backgroundImage = `url(../tabs/img/${item}.jpg)`;
    });
  };
  archiveInput();
};

window.addEventListener("DOMContentLoaded", handleDomLoad);
// Archive load end ===========================================
