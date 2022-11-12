let color = "#3AA757";
let nameButton = "citation";
let perso = "Mettez votre texte personalise ici !!";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ nameButton });
  chrome.storage.sync.set({ perso });
  console.log(color);
  console.log(nameButton);
});
