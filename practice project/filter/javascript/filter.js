const data = [
  {
    id: 1,
    title: "html",
    catch: "language used to structure the webpage elements",
    category: "language",
  },
  {
    id: 2,
    title: "css",
    catch:
      "language used to create the layout the webpage and style the web page elements",
    category: "language",
  },
  {
    id: 3,
    title: "javascript",
    catch: "language used to make the webpage interactive and dynamic",
    category: "language",
  },
  {
    id: 4,
    title: "python",
    catch:
      " high-level, general-purpose programming language that emphasizes code readability",
    category: "language",
  },
  {
    id: 5,
    title: "swift",
    catch:
      "general-purpose, multi-paradigm, compiled programming language primarily used to develop IOS app",
    category: "language",
  },
  {
    id: 6,
    title: "kotlin",
    catch:
      "cross-platform, statically typed, general-purpose programming language preferred for Android app developers",
    category: "language",
  },
  {
    id: 7,
    title: "electron",
    catch:
      "framework designed to create desktop applications using web technologies",
    category: "framework",
  },
  {
    id: 8,
    title: "react",
    catch:
      "free and open-source front-end JavaScript library[3] for building user interfaces based on UI components",
    category: "library",
  },
  {
    id: 9,
    title: "native",
    catch:
      "open-source UI software framework used to develop applications for Android, iOS, macOS, Web, Windows",
    category: "framework",
  },
  {
    id: 10,
    title: "tailwind",
    catch:
      "open source CSS framework incorporating utility CSS classes that can be used to style each element by mixing and matching",
    category: "framework",
  },
];


// Constants =============================================================

const dataMain = document.querySelector(".data-main");
const filterBtn = document.querySelectorAll(".filter-btn button")

// Constants ends ========================================================
// Functions =============================================================

const showData = (array) => {
  let dataString = array.map(function (item) {
    return `<article>
     <div class="data-title">
    <h1>${item.title}</h1>
    </div>
    <div class="data-catch">
    <span>${item.catch}</span>
    </div>
    <div class="data-update">
    <i class="fa-solid fa-wrench"></i>
    </div>
    </article>`;
  });
  dataString = dataString.join("");
  dataMain.innerHTML = dataString;

}

// Functions ends ========================================================
// Event handlers ========================================================

function showDataInit() {
  showData(data)
}

function handleFilterBtnClick(event) {
  const selectedCategory = event.currentTarget.dataset.id
  const CategorizedArray = data.filter((item) => {
    if(item.category === selectedCategory) {
      return item
    }
  })
  if(selectedCategory === "all") {
    showData(data)
  } else {
    showData(CategorizedArray)
  }
}

// Event handlers ends ===================================================
// Eventlisteners ========================================================

window.addEventListener("DOMContentLoaded", showDataInit);
filterBtn.forEach((item) => {
  item.addEventListener("click", handleFilterBtnClick)
})


// Eventlisteners ends ===================================================


