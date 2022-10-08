const navToggle = document.querySelector(".nav-toggle");
const navContents = document.querySelector(".nav-contents");
const contacts = document.querySelector(".contacts");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".nav-contents a");

function handleNavToggleClick() {
  navContents.classList.toggle("nav-show");
  contacts.classList.toggle("toggle-active");
  nav.classList.toggle("toggle-active");
}

function handleLinkClick() {
  navContents.classList.remove("nav-show");
  contacts.classList.remove("toggle-active");
  nav.classList.remove("toggle-active");
}

function forEachLinks(item) {
  item.addEventListener("click", handleLinkClick);
}

navToggle.addEventListener("click", handleNavToggleClick);
links.forEach((item) => forEachLinks(item));
