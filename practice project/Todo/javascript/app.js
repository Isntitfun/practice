const list = document.querySelector(".list");
const alert = document.querySelector(".alert");
const alertMessage = document.querySelector(".alert span");

function resetGUI() {
  const categories = document.querySelectorAll(".category-container");
  const category = document.querySelectorAll(".category");
  const itemEditBtn = document.querySelectorAll(".item .edit-btn");
  const categoryEditBtn = document.querySelectorAll(".category .edit-btn");

  const handleCategoriesClick = (event) => {
    const itemContainer = event.currentTarget.querySelector(".item-container");
    const itemWrapper = itemContainer.querySelector(".item-wrapper");
    const itemContainerHeight = itemContainer.getBoundingClientRect().height;
    if (itemContainerHeight === 0) {
      const itemWrapperHeight = itemWrapper.getBoundingClientRect().height;
      itemContainer.style.height = `${itemWrapperHeight}px`;
      setTimeout(function () {
        itemContainer.style.overflow = "visible";
      }, 450);
    }
  };

  const handleCategoryClick = (event) => {
    const itemContainer = event.currentTarget.nextElementSibling;
    const itemWrapper = itemContainer.querySelector(".item-wrapper");
    const itemContainerHeight = itemContainer.getBoundingClientRect().height;
    const itemWrapperHeight = itemWrapper.getBoundingClientRect().height;

    if (itemContainerHeight > 0) {
      const itemWrapperHeight = itemWrapper.getBoundingClientRect().height;
      itemContainer.style.height = `${itemWrapperHeight}px`;

      setTimeout(function () {
        itemContainer.style.overflow = "hidden";
        itemContainer.style.height = `0px`;
      }, 300);
    }
  };

  const handleCategoryEditBtnClick = (event) => {
    event.stopPropagation();
    const catID = event.currentTarget.parentElement.getAttribute("id");
    const targetCategory = document.getElementById(`catID${catID}`);
    const targetTxtbox = targetCategory.querySelectorAll(".txtbox");
    let editflag = false;

    console.log(targetTxtbox);
    if (!editflag) {
      targetTxtbox.forEach((item) =>
        item.setAttribute("contenteditable", "true")
      );
      editflag = true;
    } else {
      targetTxtbox.forEach((item) =>
        item.setAttribute("contenteditable", "false")
      );
      editflag = false;
    }
  };

  categories.forEach((item) => {
    item.addEventListener("click", handleCategoriesClick);
  });

  category.forEach((item) => {
    item.addEventListener("click", handleCategoryClick);
  });

  categoryEditBtn.forEach((item) => {
    item.addEventListener("click", handleCategoryEditBtnClick);
  });
}

// input submit
const form = document.querySelector(".console-wrapper");
const itemText = document.getElementById("text");
const itemTitle = document.getElementById("title");
const itemCategory = document.getElementById("category");
const itemColor = document.getElementById("color");

const resetForm = () => {
  itemText.value = "";
  itemTitle.value = "";
  itemColor.value = "#ffffff";
};

const showAlert = (type, message) => {
  alert.classList.add(`alert-${type}`);
  alertMessage.innerText = message;

  const hideAlert = () => {
    alert.classList.remove(`alert-${type}`);
  };
  setTimeout(hideAlert, 1300);
};

const createNewItem = (targetCategory) => {
  const textValue = itemText.value;
  const titleValue = itemTitle.value;
  const colorValue = itemColor.value;

  const newItem = document.createElement("div");
  let itemid = document.createAttribute("item-id");
  newItem.setAttributeNode(itemid);
  newItem.classList.add("item");
  newItem.style.backgroundColor = `${colorValue}`;
  newItem.innerHTML = `
          <div class="item-row1">
            <div class="item-title">
            <span spellcheck="false" class="txtbox item-title-txtbox" contenteditable
            >${titleValue}</span
          >
            </div>
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
          <span spellcheck="false" class="txtbox item-content-txtbox" contenteditable
          >${textValue}</span
        ></div>
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
      <div class="category-title">
      <span spellcheck="false" class="txtbox category-title-txtbox" contenteditable=""
      >${categoryValue}</span
    >
      </div>
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

  const textValue = itemText.value;
  const categoryValue = itemCategory.value;
  const itemID = `itemID${new Date().getTime().toString()}`;
  const categoryID = `categoryID${new Date().getTime().toString()}`;

  const categoryRawData = [...document.querySelectorAll(".category-container")];
  const existingCategories = categoryRawData.map(
    (item) => item.querySelector(".category-title").innerText
  );

  if (textValue === "") {
    showAlert("attention", `Content is absent`);
  } else if (categoryValue === "") {
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory);
    showAlert("normal", `Item Added in General`);
  } else if (existingCategories.includes(categoryValue)) {
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory);
    showAlert("normal", `Item Added in ${categoryValue}`);
  } else {
    createNewCategory(categoryValue);
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory);
    showAlert("normal", `New category Added - ${categoryValue}`);
  }

  resetGUI();
  resetForm();
};

form.addEventListener("submit", handleFormSubmit);

resetGUI();
