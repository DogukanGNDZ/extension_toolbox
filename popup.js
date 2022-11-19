const changeColor = document.getElementById("colorChange");
const SavePerso = document.getElementById("savePerso");
const buttonOptions = document.getElementById("buttonDiv");
const textPerso = document.getElementById("perso");
const activeImage = document.getElementById("activeImage");
const desactivateImage = document.getElementById("desactiveImage");
const will = document.getElementById("will");
const cat = document.getElementById("cat");
const newLien = document.getElementById("lienImage");
const saveLien = document.getElementById("saveLien");
const perso = document.getElementById("persoImage");
const elementImagesPerso = document.getElementById("imagesPersoDiv");
const selectedClassName = "current";
const buttonColors = ["#3AA757", "#e8453c", "#f9bb2d", "#4688f1"];
const buttonName = ["citation", "anecdotes", "enigmes", "personalise"];

//get something from localStorage
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

chrome.storage.sync.get("nameButton", ({ nameButton }) => {
  changeColor.innerHTML = nameButton;
});
chrome.storage.sync.get("perso", ({ perso }) => {
  textPerso.value = perso;
});

chrome.storage.sync.get("tablePerso", ({ tablePerso }) => {
  tablePerso.forEach((element) => {
    newLien.value += element;
    newLien.value += ", ";
  });
});

function handleButtonClick(e) {
  const current = e.target.parentElement.querySelector(`.${selectedClassName}`);
  if (current && current !== e.target) {
    current.classList.remove(selectedClassName);
  }

  const color = e.target.dataset.color;
  e.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
  changeColor.style.backgroundColor = color;

  const nameButton = e.target.dataset.name;
  chrome.storage.sync.set({ nameButton });
  changeColor.innerHTML = nameButton;
}

function constructOptions(buttonColors, buttonName) {
  chrome.storage.sync.get("color", (data) => {
    const currentColor = data.color;
    for (let i = 0; i < 4; i++) {
      const button = document.createElement("button");
      button.dataset.color = buttonColors[i];
      button.style.backgroundColor = buttonColors[i];
      button.dataset.name = buttonName[i];
      button.innerHTML = buttonName[i];

      if (buttonColors[i] === currentColor) {
        button.classList.add(selectedClassName);
      }

      button.addEventListener("click", handleButtonClick);
      buttonOptions.appendChild(button);
    }
  });
}

function constructImages() {
  chrome.storage.sync.get("tablePerso", ({ tablePerso }) => {
    var i = 0;
    tablePerso.forEach((element) => {
      const textArea = document.createElement("textarea");
      textArea.dataset.id = i;
      textArea.dataset.cols = "37";
      textArea.dataset.row = "5";
      textArea.value += element;
      const button = document.createElement("button");
      button.dataset.id = i;
      elementImagesPerso.appendChild(textArea);
      elementImagesPerso.appendChild(button);
      i++;
    });
  });
}

function handlePersoNewTab() {
  let perso = textPerso.value;
  chrome.storage.sync.set({ perso });
}

function handleActivate() {
  let activateWill = true;
  chrome.storage.sync.set({ activateWill });
}
function handleDesactivate() {
  let activateWill = false;
  chrome.storage.sync.set({ activateWill });
}

function handleWill() {
  let setImage = "will";
  chrome.storage.sync.set({ setImage });
}

function handleCat() {
  let setImage = "cat";
  chrome.storage.sync.set({ setImage });
}

function handlePersoImage() {
  let setImage = "perso";
  chrome.storage.sync.set({ setImage });
}

function handleNewLien() {
  chrome.storage.sync.get("tablePerso", (data) => {
    let tablePerso = data.tablePerso;
    console.log(tablePerso);
    tablePerso.push(newLien.value);
    chrome.storage.sync.set({ tablePerso });
  });
}

SavePerso.addEventListener("click", handlePersoNewTab);
activeImage.addEventListener("click", handleActivate);
desactivateImage.addEventListener("click", handleDesactivate);
will.addEventListener("click", handleWill);
cat.addEventListener("click", handleCat);
saveLien.addEventListener("click", handleNewLien);
perso.addEventListener("click", handlePersoImage);
constructOptions(buttonColors, buttonName);
constructImages();
