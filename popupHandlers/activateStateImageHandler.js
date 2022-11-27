const activeImage = document.getElementById("activeImage");
const desactivateImage = document.getElementById("desactiveImage");
const activatesDes = document.getElementById("act/des");

function handleActivate() {
  let activateWill = true;
  chrome.storage.sync.set({ activateWill });
  activatesDes.innerHTML = "Activé";
}
function handleDesactivate() {
  let activateWill = false;
  chrome.storage.sync.set({ activateWill });
  activatesDes.innerHTML = "Désactivé";
}

activeImage.addEventListener("click", handleActivate);
desactivateImage.addEventListener("click", handleDesactivate);
