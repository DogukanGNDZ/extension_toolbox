let color = "#3AA757";
let nameButton = "citation";
let perso = "Mettez votre texte personalise ici !!";
let setImage = "will";
let activateWill = false;
let tablePerso = [];
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ nameButton });
  chrome.storage.sync.set({ perso });
  chrome.storage.sync.set({ activateWill });
  chrome.storage.sync.set({ setImage });
  chrome.storage.sync.set({ tablePerso });
  console.log(activateWill);
  console.log(color);
  console.log(nameButton);
});
