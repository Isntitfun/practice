const modalContents = [
  {
    name: "Geographics",
    img: "https://i.pinimg.com/originals/92/2e/51/922e517a82de5791b5c82a4bfa66e86f.jpg",
  },
  {
    name: "Landscape & Architecture",
    img: "https://w.namu.la/s/d66ead01152021b7275675c902b4d827d612a2b65a40635d2094901fdf403ebd021c887c358ae1a6f405cb6d267e6c9bee8e8b3755a045bea94cbbd038efc37a9c954cf42167955297ccf4a2128f8cb438273188e811dc886e4ca7a28acdab8b",
  },
];

// Modal
const modal = document.querySelector(".modal-overlay");

// Modal source
const modalTitle = document.querySelector(".modal-header h1");
const modalImg = document.querySelector(".modal-container img");

// Buttons
const geographics = document.querySelector(".geographics");
const landscape = document.querySelector(".landscape");
const modalCloseBtn = document.querySelector(".modal-header button");

let currentItem = 0;

function changeModal() {
  const selectedModal = modalContents[currentItem];
  modalTitle.textContent = selectedModal.name;
  modalImg.src = selectedModal.img;
}
function showModal() {
  modal.classList.toggle("modal-show");
}

geographics.addEventListener("click", function () {
  currentItem = 0;
  changeModal();
  showModal();
});

landscape.addEventListener("click", function () {
  currentItem = 1;
  changeModal();
  showModal();
});

modalCloseBtn.addEventListener("click", showModal);
