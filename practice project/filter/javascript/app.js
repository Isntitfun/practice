const page1 = document.querySelector(".page1");
const blurBox = document.querySelector(".blur-box");

function handlePage1Scroll() {
  const scroll = window.scrollY;
  const totalHeignt = window.innerHeight;

  blurBox.style.backdropFilter = `blur(${
    ((1.5 * scroll) / totalHeignt) * 20
  }px)`;
  page1.style.opacity = `${1 - scroll / totalHeignt}`;
  page1.style.transform = `scale(${1 - scroll / (2 * totalHeignt)}`;
}

window.addEventListener("scroll", handlePage1Scroll);
