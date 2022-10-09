const navToggle = document.querySelector(".nav-toggle");
const navContents = document.querySelector(".nav-contents");
const contacts = document.querySelector(".contacts");
const aside = document.querySelector("aside");
const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-contents li");

function handleNavToggleClick() {
  aside.classList.toggle("side-show");
  header.classList.toggle("toggle-active");
}

function forEachLinks(item) {
  item.addEventListener("click", handleNavToggleClick);
}

navToggle.addEventListener("click", handleNavToggleClick);

links.forEach((item) => forEachLinks(item));
