const categories = document.querySelectorAll(".category");
const test = categories[0];

const handleCategoryClick = (event) => {
  const itemContainer =
    event.target.parentElement.querySelector(".item-container");
  const itemWrapper = itemContainer.querySelector(".item-wrapper");
  const itemContainerHeight = itemContainer.getBoundingClientRect().height;
  const itemWrapperHeight = itemWrapper.getBoundingClientRect().height;
  if (itemContainerHeight === 0) {
    itemContainer.style.height = `${itemWrapperHeight}px`;
  } else {
    itemContainer.style.height = `0px`;
  }
};

categories.forEach((item) => {
  item.addEventListener("click", handleCategoryClick);
});
