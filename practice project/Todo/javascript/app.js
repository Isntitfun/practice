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

const initialCategory = document.querySelector(".category-container")
const initialItem = document.querySelector(".item")
const initialCategoryEdit = document.querySelector(".category .edit-btn");
const initialItemEdit = document.querySelectorAll(".item .edit-btn");
const initialCategoryClear = document.querySelector(".category .clear-btn")

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
  const isEditing = targetItem.getAttribute("editflag")

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
  }
};

const handleCategoryEditBtnClick = (event) => {
  event.stopPropagation();
  const catID = event.currentTarget.parentElement.getAttribute("id");
  const targetCategory = document.getElementById(`catID${catID}`);
  const targetTxtbox = targetCategory.querySelector(".txtbox");
  const isEditing = targetCategory.getAttribute("editflag")
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
    targetCategory.setAttribute("editflag", "" );
    event.currentTarget.classList.remove("active-btn");
    editMode();
  }
};

const handleCategoryClearBtnClick = (event) => {
  event.stopPropagation()
  const catID = event.currentTarget.parentElement.getAttribute("id");
  const targetCategory = document.getElementById(`catID${catID}`);
  const targetCategoryName = targetCategory.querySelector(".category-title span")
  const targetContainer = targetCategory.querySelector(".item-wrapper")
  const targetItems = targetContainer.querySelectorAll(".item")
  console.log(targetItems);

  if(targetItems.length >= 1) {
    targetItems.forEach((item) => item.style.opacity = "0")
  setTimeout(targetItems.forEach((item) => targetContainer.removeChild(item)),400)
  showAlert("normal", `${targetCategoryName.innerText} is cleared`)
} else {
  showAlert("attention", `${targetCategoryName.innerText} is already empty`)
}

setTimeout(targetContainer.parentElement.style.overflow = "hidden",400)
setTimeout(resetGUI(),400)
}



// form functionalities
const createNewItem = (targetCategory) => {
  const textValue = itemText.value;
  const titleValue = itemTitle.value;
  const colorValue = itemColor.value;
  const itemID = `${new Date().getTime().toString()}`;

  const newItem = document.createElement("div");
  let editflag = document.createAttribute("editflag");
  editflag.value = ""
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

  const targetLocation = targetCategory.querySelector(".item-wrapper");
  targetLocation.appendChild(newItem);
};

const createNewCategory = (categoryValue) => {
  const categoryID = `${new Date().getTime().toString()}`;
  const newCategory = document.createElement("div");
  let editflag = document.createAttribute("editflag");
  editflag.value = ""
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
  const newClearBtn = newCategory.querySelector(".clear-btn")
  newClearBtn.addEventListener("click",handleCategoryClearBtnClick)
  list.appendChild(newCategory);
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const textValue = itemText.value;
  const categoryValue = itemCategory.value;

  const categoryRawData = [...document.querySelectorAll(".category-container")];
  const existingCategories = categoryRawData.map(
    (item) => item.querySelector(".category-title").innerText
  );
  const existingCategoriesID = categoryRawData.map((item) => item.id);

  if (textValue === "") {
    showAlert("attention", `Content is absent`);
  } else if (categoryValue === "") {
    const targetCategory = document.getElementById(`catID${categoryValue}`);
    createNewItem(targetCategory);
    showAlert("normal", `Item Added in General`);
  } else if (existingCategories.includes(categoryValue)) {
    const targetCategory = document.getElementById(
      `${existingCategoriesID[existingCategories.indexOf(categoryValue)]}`
    );
    createNewItem(targetCategory);
    showAlert("normal", `Item Added in ${categoryValue}`);
  } else {
    createNewCategory(categoryValue);
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
    createNewItem(targetCategory);
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




initialCategory.setAttribute("editflag", "")
initialItem.setAttribute("editflag","")
initialCategoryEdit.addEventListener("click", handleCategoryEditBtnClick);
initialItemEdit.forEach((item) =>
  item.addEventListener("click", handleItemEditBtnClick)
);
initialCategoryClear.addEventListener("click", handleCategoryClearBtnClick)

form.addEventListener("submit", handleFormSubmit);

resetGUI();
