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
const modifyLien = document.getElementById("modifyLien");
const textConfirm = document.getElementById("textConfirm");
const drawActivate = document.getElementById("draw");
const drawDesactivate = document.getElementById("drawDesactivate");
const selectedClassName = "current";
const buttonColors = ["#3AA757", "#e8453c", "#f9bb2d", "#4688f1","ff6944"];
const buttonName = ["citation", "anecdotes", "énigmes", "personalisé", "note"];

import draww from "./draw";
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
    for (let i = 0; i < buttonName.length; i++) {
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
      textArea.id = i;
      textArea.value += element;
      elementImagesPerso.appendChild(textArea);
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
    tablePerso.push(newLien.value);
    chrome.storage.sync.set({ tablePerso });
  });
  const textValue = document.createElement("h3");
  textValue.innerHTML = "Nouveau lien ajouter";
  textConfirm.appendChild(textValue);
}

function handleModifiyLien() {
  chrome.storage.sync.get("tablePerso", (data) => {
    let tablePerso = data.tablePerso;
    for (let i = 0; i < tablePerso.length; i++) {
      const elementLien = document.getElementById(`${i}`);

      if (tablePerso[i] != elementLien.value) {
        tablePerso[i] = elementLien.value;
        const textValue = document.createElement("h3");
        textValue.innerHTML = "Image Modifier";
        textConfirm.appendChild(textValue);
      }
    }
    chrome.storage.sync.set({ tablePerso });
  });
}

function handleActivateDraw() {
  let activateDraw = true;
  chrome.storage.sync.set({ activateDraw });
  document.body.style.cursor = "crosshair";
}
function handleDesactivateDraw() {
  let activateDraw = false;
  chrome.storage.sync.set({ activateDraw });
  document.body.style.cursor = "auto";
}

function handleActivateDraw() {
  let activateDraw = true;
  chrome.storage.sync.set({ activateDraw });
  document.body.style.cursor = "crosshair";
}
function handleDesactivateDraw() {
  let activateDraw = false;
  chrome.storage.sync.set({ activateDraw });
  document.body.style.cursor = "auto";
}


/*
document.body.style.cursor = "crosshair";

const button_pencil = document.createElement("button");
const textt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>`;
button_pencil.innerHTML = textt;

button_pencil.addEventListener("click", () => {
  console.log("CLICK!");
});

button_pencil.onclick = function(){
  console.log("aaaaaaaaaa");
  alert('here be dragons');
  return false;
};

const canvas = document.createElement("canvas");
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const ctx = canvas.getContext("2d")
ctx.fillStyle = "red"
ctx.fillRect(100, 100, 100, 100)


buttonOptions.appendChild(button_pencil);
buttonOptions.appendChild(canvas);*/

SavePerso.addEventListener("click", handlePersoNewTab);
activeImage.addEventListener("click", handleActivate);
desactivateImage.addEventListener("click", handleDesactivate);
will.addEventListener("click", handleWill);
drawActivate.addEventListener("click", handleActivateDraw);
drawDesactivate.addEventListener("click", handleDesactivateDraw);
cat.addEventListener("click", handleCat);
saveLien.addEventListener("click", handleNewLien);
perso.addEventListener("click", handlePersoImage);
modifyLien.addEventListener("click", handleModifiyLien);
constructOptions(buttonColors, buttonName);
constructImages();
