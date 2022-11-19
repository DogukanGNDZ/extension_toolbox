let color = "#3AA757";
let nameButton = "citation";
let perso = "Mettez votre texte personalise ici !!";
let setImage = "will";
let activateWill = true;
let activateDraw = false;
let tablePerso = [
  "https://cdn.futura-sciences.com/sources/grenouille_arboricole_premiere_fluorescente.jpg",
  "https://jardinage.lemonde.fr/images/dossiers/2016-07/grenouille-agile-105419.jpg",
];
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ nameButton });
  chrome.storage.sync.set({ perso });
  chrome.storage.sync.set({ activateWill });
  chrome.storage.sync.set({ setImage });
  chrome.storage.sync.set({ tablePerso });
  chrome.storage.sync.set({ activateDraw});
  console.log(activateWill);
  console.log(color);
  console.log(nameButton);
});
