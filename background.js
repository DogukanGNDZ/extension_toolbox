let color = "#3AA757";
let nameButton = "Citation";
let perso = "Mettez votre texte personalise ici !!";
let setImage = "will";

let activateDraw = false;
let activateWill = false;
let tablePerso = [];
let notePerso = "Bienvenue sur le tableau de bord des notes";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ nameButton });
  chrome.storage.sync.set({ perso });
  chrome.storage.sync.set({ activateWill });
  chrome.storage.sync.set({ setImage });
  chrome.storage.sync.set({ tablePerso });
  chrome.storage.sync.set({ notePerso });
  chrome.storage.sync.set({ activateDraw});
  console.log(activateWill);
  console.log(color);
  console.log(nameButton);
  console.log(notePerso);
});
