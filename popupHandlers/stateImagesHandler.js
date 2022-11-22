const will = document.getElementById("will");
const cat = document.getElementById("cat");
const perso = document.getElementById("persoImage");

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

will.addEventListener("click", handleWill);
cat.addEventListener("click", handleCat);
perso.addEventListener("click", handlePersoImage);
