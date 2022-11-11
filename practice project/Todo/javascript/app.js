// global
const alert = document.querySelector(".alert");
const alertMessage = document.querySelector(".alert span");

// display
const list = document.querySelector(".list");

// console
const form = document.querySelector(".console-wrapper");
const itemText = document.getElementById("text");
const itemTitle = document.getElementById("title");
const itemCategory = document.getElementById("category");
const itemColor = document.getElementById("color");

const initialCategory = document.querySelector(".category-container");
const initialItem = document.querySelector(".item");
const initialCategoryEdit = document.querySelector(".category .edit-btn");
const initialItemEdit = document.querySelectorAll(".item .edit-btn");
const initialCategoryClear = document.querySelector(".category .clear-btn");
const initialItemDelete = document.querySelector(".item .delete-btn");
const initialCategoryDelete = document.querySelector(".category .delete-btn");

// functions
// glabal
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

  categories.forEach((item) => {
    item.addEventListener("click", handleCategoriesClick);
  });

  category.forEach((item) => {
    item.addEventListener("click", handleCategoryClick);
  });

  const itemContainer = document.querySelectorAll(".item-container");
  const itemContainerArray = Array.from(itemContainer);
  const itemWrapper = Array.from(itemContainer).map(
    (item) => item.firstElementChild
  );
  const itemContainerHeight = Array.from(itemContainer).map(
    (item) => item.getBoundingClientRect().height
  );
  const itemWrapperHeight = itemWrapper.map(
    (item) => item.getBoundingClientRect().height
  );

  itemContainerArray.forEach((item) => {
    const index = itemContainerArray.indexOf(item);

    if (itemContainerHeight[index] !== 0) {
      itemContainer[index].style.height = `${itemWrapperHeight[index]}px`;
    }
  });
}

const showAlert = (type, message) => {
  alert.classList.add(`alert-${type}`);
  alertMessage.innerText = message;

  const hideAlert = () => {
    alert.classList.remove(`alert-${type}`);
  };
  setTimeout(hideAlert, 1300);
};

// button functionalities
const handleItemEditBtnClick = (event) => {
  event.stopPropagation();
  const itemID = event.currentTarget.parentElement.getAttribute("id");
  const targetItem = document.getElementById(`itemID${itemID}`);
  const targetTxtbox = targetItem.querySelectorAll(".txtbox");
  const isEditing = targetItem.getAttribute("editflag");

  if (!isEditing) {
    targetTxtbox.forEach((item) =>
      item.setAttribute("contenteditable", "true")
    );
    targetItem.setAttribute("editflag", "true");
    event.currentTarget.classList.add("active-btn");
  } else {
    targetTxtbox.forEach((item) =>
      item.setAttribute("contenteditable", "false")
    );
    targetItem.setAttribute("editflag", "");
    event.currentTarget.classList.remove("active-btn");
    editItemStorage(
      targetTxtbox[1].innerText,
      targetTxtbox[0].innerText,
      `itemID${itemID}`
    );
  }
};

const handleCategoryEditBtnClick = (event) => {
  event.stopPropagation();
  const catID = event.currentTarget.parentElement.getAttribute("id");
  const targetCategory = document.getElementById(`catID${catID}`);
  const targetTxtbox = targetCategory.querySelector(".txtbox");
  const isEditing = targetCategory.getAttribute("editflag");
  const editMode = () => {
    const preventClick = (event) => {
      event.stopPropagation();
    };

    if (targetCategory.getAttribute("editflag")) {
      targetTxtbox.addEventListener("click", preventClick, true);
    } else {
      const newTargetTxtbox = targetTxtbox.cloneNode(true);
      targetTxtbox.parentNode.replaceChild(newTargetTxtbox, targetTxtbox);
    }
  };

  if (!isEditing) {
    targetTxtbox.setAttribute("contenteditable", "true");
    targetCategory.setAttribute("editflag", "true");
    event.currentTarget.classList.add("active-btn");
    editMode();
  } else {
    targetTxtbox.setAttribute("contenteditable", "false");
    targetCategory.setAttribute("editflag", "");
    event.currentTarget.classList.remove("active-btn");
    editMode();
    editCategoryStorage(targetTxtbox.innerText, `catID${catID}`);
  }
};

const handleCategoryClearBtnClick = (event) => {
  event.stopPropagation();
  const catID = event.currentTarget.parentElement.getAttribute("id");
  const targetCategory = document.getElementById(`catID${catID}`);
  const targetCategoryName = targetCategory.querySelector(
    ".category-title span"
  );
  const targetContainer = targetCategory.querySelector(".item-wrapper");
  const targetItems = targetContainer.querySelectorAll(".item");
  const clearItem = () => {
    targetItems.forEach((item) => targetContainer.removeChild(item));
    targetContainer.parentElement.style.overflow = "hidden";
    resetGUI();
  };
  const delayedClearItem = setTimeout(clearItem, 350);

  if (targetItems.length >= 1) {
    targetItems.forEach((item) => (item.style.opacity = "0"));
    delayedClearItem;
    showAlert("normal", `${targetCategoryName.innerText} is cleared`);
    clearCategoryStorage(`catID${catID}`);
  } else {
    showAlert("attention", `${targetCategoryName.innerText} is already empty`);
  }
};

const handleItemDeleteBtnClick = (event) => {
  event.stopPropagation();
  const itemID = event.currentTarget.parentElement.getAttribute("id");
  const targetItem = document.getElementById(`itemID${itemID}`);
  const targetContainer = targetItem.parentElement;

  const deleteItem = () => {
    targetContainer.removeChild(targetItem);
    targetContainer.parentElement.style.overflow = "hidden";
    resetGUI();
  };

  const delayedDeleteItem = setTimeout(deleteItem, 350);

  targetItem.style.opacity = "0";
  showAlert("normal", "Item deleted");
  delayedDeleteItem;
  deleteItemStorage(`itemID${itemID}`);
};

const handleCategoryDeleteBtnClick = (event) => {
  event.stopPropagation();
  const catID = event.currentTarget.parentElement.getAttribute("id");
  const targetCategory = document.getElementById(`catID${catID}`);
  const targetContainer = targetCategory.parentElement;

  const deleteCategory = () => {
    targetContainer.removeChild(targetCategory);
    resetGUI();
  };

  const delayedDeleteCategory = setTimeout(deleteCategory, 350);

  targetCategory.style.opacity = "0";
  delayedDeleteCategory;
  showAlert("normal", "Category deleted");
  deleteCategoryStorage(`catID${catID}`);
};
// form functionalities
const createNewItem = (
  targetCategory,
  textValue,
  titleValue,
  colorValue,
  itemID
) => {
  const newItem = document.createElement("div");
  let editflag = document.createAttribute("editflag");
  editflag.value = "";
  newItem.setAttributeNode(editflag);
  newItem.classList.add("item");
  newItem.style.backgroundColor = `${colorValue}`;
  newItem.setAttribute("id", `itemID${itemID}`);
  newItem.innerHTML = `
          <div class="item-row1">
            <div class="item-title">
            <span spellcheck="false" class="txtbox item-title-txtbox"
            >${titleValue}</span
          >
            </div>
            <div class="btn-box" id="${itemID}">
              <button class="btn edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button class="btn delete-btn">
                <i class="fa-regular fa-square-minus"></i>
              </button>
            </div>
          </div>
          <div class="item-row2">
          <span spellcheck="false" class="txtbox item-content-txtbox"
          >${textValue}</span
        ></div>
  `;

  const newEditBtn = newItem.querySelector(".edit-btn");
  newEditBtn.addEventListener("click", handleItemEditBtnClick);
  const newDeleteBtn = newItem.querySelector(".delete-btn");
  newDeleteBtn.addEventListener("click", handleItemDeleteBtnClick);

  const targetLocation = targetCategory.querySelector(".item-wrapper");
  targetLocation.appendChild(newItem);
  const targetID = targetCategory.id;
  saveItem(targetID, textValue, titleValue, colorValue, itemID);
};

const createNewCategory = (categoryValue, categoryID) => {
  const newCategory = document.createElement("div");
  let editflag = document.createAttribute("editflag");
  editflag.value = "";
  newCategory.setAttributeNode(editflag);
  newCategory.classList.add("category-container");
  newCategory.setAttribute("id", `catID${categoryID}`);
  newCategory.innerHTML = `
  <div class="category">
      <div class="category-title">
      <span spellcheck="false" class="txtbox category-title-txtbox"
      >${categoryValue}</span
    >
      </div>
      <div class="btn-box" id="${categoryID}">
          <button class="btn edit-btn">
              <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <button class="btn clear-btn">
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

  const newEditBtn = newCategory.querySelector(".edit-btn");
  newEditBtn.addEventListener("click", handleCategoryEditBtnClick);
  const newClearBtn = newCategory.querySelector(".clear-btn");
  newClearBtn.addEventListener("click", handleCategoryClearBtnClick);
  const newDeleteBtn = newCategory.querySelector(".delete-btn");
  newDeleteBtn.addEventListener("click", handleCategoryDeleteBtnClick);
  list.appendChild(newCategory);
  saveCategory(categoryValue, categoryID);
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const textValue = itemText.value;
  const titleValue = itemTitle.value;
  const colorValue = itemColor.value;
  const itemID = `${new Date().getTime().toString()}`;

  const categoryValue = itemCategory.value;
  const categoryID = `${new Date().getTime().toString()}`;

  const categoryRawData = [...document.querySelectorAll(".category-container")];
  const existingCategories = categoryRawData.map(
    (item) => item.querySelector(".category-title").innerText
  );
  const existingCategoriesID = categoryRawData.map((item) => item.id);

  if (textValue === "") {
    showAlert("attention", `Content is absent`);
  } else if (list.children.length < 1) {
    createNewCategory(categoryValue, categoryID);
    const categoryRawData = [
      ...document.querySelectorAll(".category-container"),
    ];
    const existingCategories = categoryRawData.map(
      (item) => item.querySelector(".category-title").innerText
    );
    const existingCategoriesID = categoryRawData.map((item) => item.id);
    const targetCategory = document.getElementById(
      `${existingCategoriesID[existingCategories.indexOf(categoryValue)]}`
    );
    createNewItem(targetCategory, textValue, titleValue, colorValue, itemID);
    showAlert("normal", `New category Added - ${categoryValue}`);
  } else if (categoryValue === "") {
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory, textValue, titleValue, colorValue, itemID);
    showAlert("normal", `Item Added in General`);
  } else if (existingCategories.includes(categoryValue)) {
    const targetCategory = document.getElementById(
      `${existingCategoriesID[existingCategories.indexOf(categoryValue)]}`
    );
    createNewItem(targetCategory, textValue, titleValue, colorValue, itemID);
    showAlert("normal", `Item Added in ${categoryValue}`);
  } else {
    createNewCategory(categoryValue, categoryID);
    const categoryRawData = [
      ...document.querySelectorAll(".category-container"),
    ];
    const existingCategories = categoryRawData.map(
      (item) => item.querySelector(".category-title").innerText
    );
    const existingCategoriesID = categoryRawData.map((item) => item.id);
    const targetCategory = document.getElementById(
      `${existingCategoriesID[existingCategories.indexOf(categoryValue)]}`
    );
    createNewItem(targetCategory, textValue, titleValue, colorValue, itemID);
    showAlert("normal", `New category Added - ${categoryValue}`);
  }

  resetGUI();
  resetForm();
};

const resetForm = () => {
  itemText.value = "";
  itemTitle.value = "";
  itemCategory.value = "";
  itemColor.value = "#ffffff";
};

// localstorage

const getFromStorage = (type) => {
  return localStorage.getItem(`${type}`)
    ? JSON.parse(localStorage.getItem(`${type}`))
    : [];
};

const saveCategory = (category, id) => {
  let toBeSaved = getFromStorage("Category");
  const newObj = { category, id: `catID${id}` };

  toBeSaved.push(newObj);
  localStorage.setItem("Category", JSON.stringify(toBeSaved));
};

const saveItem = (catID, text, title, color, id) => {
  const toBeSaved = getFromStorage("Item");
  const newObj = { catID, text, title, color, id: `itemID${id}` };
  toBeSaved.push(newObj);

  localStorage.setItem("Item", JSON.stringify(toBeSaved));
};

const editCategoryStorage = (category, id) => {
  let categoryList = getFromStorage("Category");
  categoryList = categoryList.map((item) => {
    if (item.id === id) {
      item.category = category;
    }
    return item;
  });

  localStorage.setItem("Category", JSON.stringify(categoryList));
};

const editItemStorage = (text, title, id) => {
  let itemList = getFromStorage("Item");
  itemList = itemList.map((item) => {
    if (item.id === id) {
      item.text = text;
      item.title = title;
    }
    return item;
  });
  localStorage.setItem("Item", JSON.stringify(itemList));
};

const deleteCategoryStorage = (id) => {
  let categoryList = getFromStorage("Category");
  categoryList = categoryList.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("Category", JSON.stringify(categoryList));

  let itemList = getFromStorage("Item");
  itemList = itemList.filter((item) => {
    if (item.catID !== id) {
      return item;
    }
  });
  localStorage.setItem("Item", JSON.stringify(itemList));
};

const deleteItemStorage = (id) => {
  let itemList = getFromStorage("Item");
  itemList = itemList.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("Item", JSON.stringify(itemList));
};

const clearCategoryStorage = (id) => {
  let itemList = getFromStorage("Item");
  itemList = itemList.filter((item) => {
    if (item.catID !== id) {
      return item;
    }
  });
  localStorage.setItem("Item", JSON.stringify(itemList));
};

const loadCategory = () => {
  let categoryList = getFromStorage("Category");
  categoryList.forEach((item) => {
    const categoryValue = item.category;
    const categoryID = item.id.slice(5);
    const newCategory = document.createElement("div");
    let editflag = document.createAttribute("editflag");
    editflag.value = "";
    newCategory.setAttributeNode(editflag);
    newCategory.classList.add("category-container");
    newCategory.setAttribute("id", `catID${categoryID}`);
    newCategory.innerHTML = `
    <div class="category">
        <div class="category-title">
        <span spellcheck="false" class="txtbox category-title-txtbox"
        >${categoryValue}</span
      >
        </div>
        <div class="btn-box" id="${categoryID}">
            <button class="btn edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="btn clear-btn">
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

    const newEditBtn = newCategory.querySelector(".edit-btn");
    newEditBtn.addEventListener("click", handleCategoryEditBtnClick);
    const newClearBtn = newCategory.querySelector(".clear-btn");
    newClearBtn.addEventListener("click", handleCategoryClearBtnClick);
    const newDeleteBtn = newCategory.querySelector(".delete-btn");
    newDeleteBtn.addEventListener("click", handleCategoryDeleteBtnClick);
    list.appendChild(newCategory);
  });
};

const loadItem = () => {
  let itemList = getFromStorage("Item");
  itemList.forEach((item) => {
    const targetCategory = document.getElementById(`${item.catID}`);
    const textValue = item.text;
    const titleValue = item.title;
    const colorValue = item.color;
    const itemID = item.id.slice(6);
    const newItem = document.createElement("div");
    console.log(targetCategory);
    let editflag = document.createAttribute("editflag");
    editflag.value = "";
    newItem.setAttributeNode(editflag);
    newItem.classList.add("item");
    newItem.style.backgroundColor = `${colorValue}`;
    newItem.setAttribute("id", `itemID${itemID}`);
    newItem.innerHTML = `
            <div class="item-row1">
              <div class="item-title">
              <span spellcheck="false" class="txtbox item-title-txtbox"
              >${titleValue}</span
            >
              </div>
              <div class="btn-box" id="${itemID}">
                <button class="btn edit-btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="btn delete-btn">
                  <i class="fa-regular fa-square-minus"></i>
                </button>
              </div>
            </div>
            <div class="item-row2">
            <span spellcheck="false" class="txtbox item-content-txtbox"
            >${textValue}</span
          ></div>
    `;

    const newEditBtn = newItem.querySelector(".edit-btn");
    newEditBtn.addEventListener("click", handleItemEditBtnClick);
    const newDeleteBtn = newItem.querySelector(".delete-btn");
    newDeleteBtn.addEventListener("click", handleItemDeleteBtnClick);

    const targetLocation = targetCategory.querySelector(".item-wrapper");
    targetLocation.appendChild(newItem);
  });
};

const DOMContentLoadedFunction = () => {
  loadCategory();
  loadItem();
  resetGUI();
};

initialCategory.setAttribute("editflag", "");
initialItem.setAttribute("editflag", "");
initialCategoryEdit.addEventListener("click", handleCategoryEditBtnClick);
initialItemEdit.forEach((item) =>
  item.addEventListener("click", handleItemEditBtnClick)
);
initialCategoryClear.addEventListener("click", handleCategoryClearBtnClick);
initialItemDelete.addEventListener("click", handleItemDeleteBtnClick);
initialCategoryDelete.addEventListener("click", handleCategoryDeleteBtnClick);

form.addEventListener("submit", handleFormSubmit);
window.addEventListener("DOMContentLoaded", DOMContentLoadedFunction);
resetGUI();
