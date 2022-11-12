const changeColor = document.getElementById("colorChange");
const SavePerso = document.getElementById("savePerso");
const buttonOptions = document.getElementById("buttonDiv");
const textPerso = document.getElementById("perso");
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

function handlePerso() {
  let perso = textPerso.value;
  chrome.storage.sync.set({ perso });
}

SavePerso.addEventListener("click", handlePerso);
constructOptions(buttonColors, buttonName);
