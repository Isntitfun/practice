const contents = [
  {
    title: "Gardens by the Bay",
    img: "sourcefiles/green-waterfall.jpg",
    text: "A waterfall inside one of two climate-controlled conservatories at Singapore's Gardens by the Bay park provides mist to maintain a cool, moist environment.",
  },
  {
    title: "Hermès Workshops",
    img: "sourcefiles/Hermès Workshops.jpg",
    text: "The structure of this building is marked by the power of the hand, allowing simultaneously the specific and the universal. In between alignment and organicity, the architecture is discrete, and blends itself with the landscape’s poetry.",
  },
  {
    title: "Rain Harvest House",
    img: "sourcefiles/rain-harvest-house.jpg",
    text: "RAIN HARVEST HOME IS A HUMBLE, TRIPARTITE HOME IN THE MOUNTAINS WEST OF MEXICO CITY THAT SPLITS APART THE TRADITIONAL PROGRAM OF A HOUSE, SCATTERING IT ACROSS A DENSELY VEGETATED SITE",
  },
  {
    title: "Maradentro",
    img: "sourcefiles/Aragones_MarAdentro-09.jpg",
    text: "In summary, the module is a two-, three-, or four-bedroom apartment; a house can be formed by adding on two or four more modules. The important thing is the versatility of this structure, one that can be entirely factory-made then raised on site in a friendly manner.",
  },
];

const prev = document.querySelector(".prev");
const random = document.querySelector(".random");
const next = document.querySelector(".next");

const title = document.querySelector(".title");
const img = document.querySelector(".img-plate img");
const text = document.querySelector(".text");
const dots = document.querySelectorAll(".dot");

let currentItem = 0;

function showArchitecture() {
  const architecture = contents[currentItem];
  title.textContent = architecture.title;
  img.src = architecture.img;
  text.textContent = architecture.text;
}

function hideDot(item) {
  item.classList.add("hidden");
}

function moveDot() {
  const dot = dots[currentItem];

  dots.forEach((item) => hideDot(item));
  dot.classList.remove("hidden");
}

next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > contents.length - 1) {
    currentItem = 0;
  }
  showArchitecture();
  moveDot();
});

prev.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = contents.length - 1;
  }
  showArchitecture();
  moveDot();
});

random.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * contents.length);

  if (currentItem < 0) {
    currentItem = contents.length - 1;
  } else if (currentItem > contents.length - 1) {
    currentItem = 0;
  }
  showArchitecture();
  moveDot();
});
