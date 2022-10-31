const loremData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere ultricies laoreet. In hac habitasse platea dictumst. Integer vitae aliquam tellus, et consequat leo. Morbi vel eros dui. Fusce venenatis tempus malesuada. Praesent viverra accumsan diam at cursus. Fusce fringilla eros quis rutrum placerat. Quisque ut elit sit amet nibh laoreet hendrerit nec vel lorem. Maecenas ut orci efficitur, posuere enim sed, pellentesque enim. Aenean nisl arcu, dignissim vitae fringilla vitae, gravida in neque. Nam vulputate mauris purus, eget fermentum sapien dapibus ac. Vivamus eu diam dapibus, ultricies ex eu, cursus orci. In efficitur sem vitae sem vulputate, ac suscipit lectus porta. Pellentesque non congue erat, aliquet semper est. Morbi vulputate mi nec nisi interdum, et facilisis risus dignissim. Pellentesque varius odio nec nisi scelerisque laoreet.",

  "Maecenas sodales pharetra diam, in rutrum tellus laoreet sed. Nunc odio justo, cursus id tincidunt convallis, rutrum sit amet odio. Maecenas lobortis mauris vel libero dictum tempor. Duis nec malesuada ipsum, tempus consectetur turpis. Nulla sit amet faucibus quam. Nam nec euismod mauris. Proin sit amet libero a odio vestibulum congue.",

  "Aenean quam mi, dignissim a arcu ut, pellentesque pharetra mi. Etiam vitae porta arcu. Praesent vitae interdum odio. Proin sagittis ornare nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla enim purus, aliquet sed libero eget, volutpat efficitur arcu. Etiam aliquam tellus hendrerit odio pellentesque, vitae viverra velit sagittis. Vivamus vulputate ante vitae blandit fringilla. Vivamus varius dapibus turpis a pretium.",

  "In hac habitasse platea dictumst. Cras a leo hendrerit, gravida nulla sit amet, vehicula quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Sed eget eros purus. Sed ullamcorper, orci ut cursus elementum, augue magna imperdiet odio, in laoreet sem augue sit amet lacus. Aliquam erat volutpat. Integer eleifend convallis ligula, a accumsan libero vehicula nec.",

  "Cras mollis leo elit. Nulla posuere nec nibh ultrices consectetur. Aliquam erat volutpat. Nulla ut massa ante. Donec lacus risus, luctus vel lacus nec, volutpat congue mauris. Nulla at justo massa. Mauris ullamcorper nisl sed est dictum lacinia. Cras vel libero mattis, rutrum risus at, mattis est. Aenean aliquet massa id scelerisque venenatis. Proin semper sem vitae magna cursus, eget elementum risus efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu efficitur eros, quis fringilla sem.",

  "Cras tincidunt odio a ultricies molestie. Praesent placerat, ante eu elementum laoreet, arcu tellus tincidunt nisi, sed pretium eros diam lacinia nibh. Proin at mauris imperdiet diam dignissim faucibus nec vel velit. Donec sodales convallis mollis. In augue dui, tincidunt vel iaculis vel, suscipit venenatis nisi. Praesent facilisis quam eleifend, faucibus mi ac, commodo nunc. Duis lacus velit, aliquet quis viverra et, ultricies sit amet tellus. Quisque ornare tincidunt nisl. Pellentesque laoreet pretium scelerisque.",

  "Sed elementum ex id pellentesque dignissim. Sed placerat nisi ac augue porta, et ullamcorper urna aliquam. Ut at blandit quam, a tristique est. Etiam odio neque, bibendum ut ultrices eget, egestas a diam. Phasellus semper tristique mollis. Sed faucibus tincidunt ultricies. Quisque at est sed risus molestie porta. Etiam eu auctor leo, quis aliquam lectus.",

  "Pellentesque tristique, dui eu rhoncus porttitor, diam dui dignissim odio, ut lacinia lectus odio sit amet massa. In varius turpis eget tortor venenatis, a sagittis nibh mollis. Praesent ipsum quam, molestie vel ligula iaculis, pretium varius leo. Phasellus sagittis, ipsum quis tincidunt egestas, ex arcu sodales tellus, ut ornare sem diam a odio. Vestibulum sit amet mauris rutrum, elementum magna vitae, tempor enim. Donec commodo eleifend tempor. Curabitur porttitor ipsum vitae tellus blandit facilisis. Integer mattis dolor urna, consectetur luctus mi ultrices et. Nullam ullamcorper non tortor eu tincidunt. Phasellus pulvinar nec purus eget malesuada. Aenean porttitor massa vitae rutrum facilisis. Nulla egestas massa nec diam aliquet vulputate. Nullam in erat non odio interdum placerat. Nulla eget lobortis magna.",

  "Duis vitae placerat sem. Curabitur ante sem, dignissim nec semper ac, porttitor vitae ex. Pellentesque eget dui magna. Praesent non posuere eros. Ut purus arcu, fringilla ut volutpat ut, eleifend nec tortor. Proin sit amet scelerisque tellus. Pellentesque a velit ut libero mattis congue. Cras lacus mauris, imperdiet eu porttitor vel, convallis sed ante. Cras accumsan erat eget tempor tincidunt.",

  "Nam pulvinar dapibus leo, non accumsan arcu tincidunt non. Fusce viverra mauris quis interdum pharetra. Vestibulum placerat enim nulla, a fermentum velit ultrices et. Suspendisse porttitor nec risus vel euismod. Nulla a urna leo. In dictum tempor ligula, sit amet maximus nisl convallis vitae. Curabitur auctor magna nisl, eget convallis libero rhoncus non. Mauris sit amet sagittis diam. Sed aliquet, lectus sed dignissim sagittis, tellus nunc gravida lorem, quis condimentum turpis erat eget mauris.",
];

const textGrid = document.querySelector(".text-container");
const form = document.querySelector("form");
const text = document.querySelector(".input input");
const number = document.querySelector(".number");
const type = document.querySelector("#input-type");

number.disabled = true;
text.disabled = false;

const loremInput = (num) => {
  for (let index = 0; index < num; index++) {
    const randomNumber = Math.floor(Math.random() * loremData.length);
    textGrid.innerHTML += `<div><p>${loremData[randomNumber]}</p></div>`;
  }
};

const textInput = (text) => {
  textGrid.innerHTML += `<div><p>${text}</p></div>`;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (type.value === "lorem") {
    loremInput(parseInt(number.value));
  } else {
    textInput(text.value);
  }
};

form.addEventListener("submit", handleFormSubmit);

const handleTypeChange = () => {
  if (type.value === "lorem") {
    text.disabled = true;
    number.disabled = false;
  } else if (type.value === "general") {
    number.disabled = true;
    text.disabled = false;
  }
};

type.addEventListener("change", handleTypeChange);
