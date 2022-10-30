const navBtn = document.querySelectorAll(".nav-container a");

let active = "home";

const addPrevious = (item) => {
  item.classList.add("previous");
};
const removeDeactive = (item) => {
  item.classList.remove("deactive");
};
const addDeactive = (item) => {
  item.classList.add("deactive");
};
const removePrevious = (item) => {
  item.classList.remove("previous");
};

const handleNavBtnClick = (event) => {
  const id = event.target.dataset.id;
  const previousSection = document.querySelector(`.${active}`);
  const nextSection = document.querySelector(`.${id}`);

  if (id !== active) {
    console.log(id);
    addPrevious(previousSection);
    setTimeout(removeDeactive, 300, nextSection);
    setTimeout(addDeactive, 600, previousSection);
    setTimeout(removePrevious, 600, previousSection);
    active = id;
  }
};

navBtn.forEach((item) => {
  item.addEventListener("click", handleNavBtnClick);
});
