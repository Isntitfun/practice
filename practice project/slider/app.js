const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelector(".slides");

const shift = 100 / slides.children.length;

console.log(shift);
let counter = 0;

const handleNext = () => {
  counter++;
  moveSlide();
  hideBtn();
};

const handlePrev = () => {
  counter--;
  moveSlide();
  hideBtn();
};

const moveSlide = () => {
  if (counter === slides.children.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.children.length - 1;
  }
  slides.style.transform = `translateX(-${shift * counter}%)`;
};

const hideBtn = () => {
  if (counter === slides.children.length - 1) {
    nextBtn.style.opacity = 0;
  } else {
    nextBtn.style.opacity = 1;
  }

  if (counter === 0) {
    prevBtn.style.opacity = 0;
  } else {
    prevBtn.style.opacity = 1;
  }
};
nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
prevBtn.style.opacity = 0;
