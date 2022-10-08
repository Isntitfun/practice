const navToggle = document.querySelector(".nav-toggle");
const navContents = document.querySelector(".nav-contents");
const contacts = document.querySelector(".contacts");
const nav = document.querySelector("nav");

function handleNavToggleClick() {
  navContents.classList.toggle("nav-show");
  contacts.classList.toggle("toggle-active");
  nav.classList.toggle("toggle-active");
}
navToggle.addEventListener("click", handleNavToggleClick);
