const list = document.querySelector(".list");

function resetGUI() {
  const categories = document.querySelectorAll(".category-container");
  const handleCategoryClick = (event) => {
    const itemContainer = event.currentTarget.querySelector(".item-container");
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
}

// input submit
const form = document.querySelector(".console-wrapper");
const itemText = document.getElementById("text");
const itemTitle = document.getElementById("title");
const itemCategory = document.getElementById("category");
const itemColor = document.getElementById("color");

const createNewItem = (targetCategory) => {
  const textValue = itemText.value;
  const titleValue = itemTitle.value;
  const newItem = document.createElement("div");
  let itemid = document.createAttribute("item-id");
  newItem.setAttributeNode(itemid);
  newItem.classList.add("item");
  newItem.innerHTML = `
      <div class="item">
          <div class="item-row1">
            <div class="item-title">${titleValue}</div>
            <div class="btn-box">
              <button class="btn edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button class="btn delete-btn">
                <i class="fa-regular fa-square-minus"></i>
              </button>
            </div>
          </div>
          <div class="item-row2">
          ${textValue}
          </div>
      </div>
  `;
  const targetLocation = targetCategory.querySelector(".item-wrapper");
  targetLocation.appendChild(newItem);
};

const createNewCategory = (categoryValue) => {
  const newCategory = document.createElement("div");
  let catid = document.createAttribute("cat-id");
  newCategory.setAttributeNode(catid);
  newCategory.classList.add("category-container");
  newCategory.setAttribute("id", `catID${categoryValue}`);
  newCategory.innerHTML = `
  <div class="category">
      <div class="category-title">${categoryValue}</div>
      <div class="btn-box">
          <button class="btn edit-btn">
              <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <button class="btn delete-btn">
              <i class="fa-regular fa-square-minus"></i>
          </button>
          <button class="btn delete-btn">
               <i class="btn fa-solid fa-trash"></i>
          </button>
      </div>
  </div>
  <div class="item-container">
      <div class="item-wrapper">
      </div>
  </div>`;
  list.appendChild(newCategory);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const categoryValue = itemCategory.value;
  const colorValue = itemColor.value;
  const itemID = `itemID${new Date().getTime().toString()}`;
  const categoryID = `categoryID${new Date().getTime().toString()}`;

  const categoryRawData = [...document.querySelectorAll(".category-container")];
  const existingCategories = categoryRawData.map(
    (item) => item.querySelector(".category-title").innerText
  );
  console.log(existingCategories);

  if (existingCategories.includes(categoryValue)) {
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory);
  } else {
    createNewCategory(categoryValue);
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory);
  }

  resetGUI();
  //   const newCategory = document.createElement("div");
  //   const newItem = document.createElement("div");
  //   let itemid = document.createAttribute("category-id");
  //   let catid = document.createAttribute("item-id");
  //   newCategory.setAttributeNode(catid);
  //   newItem.setAttributeNode(itemid);
  //   newCategory.classList.add("category-container");
  //   newItem.classList.add("item");

  //   newCategory.innerHTML = `
  //     <div class="category">
  //         <div class="category-title">${categoryValue}</div>
  //         <div class="btn-box">
  //             <button class="btn edit-btn">
  //                 <i class="fa-regular fa-pen-to-square"></i>
  //             </button>
  //             <button class="btn delete-btn">
  //                 <i class="fa-regular fa-square-minus"></i>
  //             </button>
  //             <button class="btn delete-btn">
  //                  <i class="btn fa-solid fa-trash"></i>
  //             </button>
  //         </div>
  //     </div>
  //     <div class="item-container">
  //         <div class="item-wrapper">
  //         </div>
  //     </div>`;

  //   newItem.innerHTML = `
  //     <div class="item">
  //         <div class="item-row1">
  //           <div class="item-title">${itemTitle}</div>
  //           <div class="btn-box">
  //             <button class="btn edit-btn">
  //               <i class="fa-regular fa-pen-to-square"></i>
  //             </button>
  //             <button class="btn delete-btn">
  //               <i class="fa-regular fa-square-minus"></i>
  //             </button>
  //           </div>
  //         </div>
  //         <div class="item-row2">
  //         ${itemText}
  //         </div>
  //     </div>
  // `;
  //   list.appendChild(newCategory);
};

form.addEventListener("submit", handleFormSubmit);
resetGUI();
