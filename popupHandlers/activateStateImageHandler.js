const activeImage = document.getElementById("activeImage");
const desactivateImage = document.getElementById("desactiveImage");

function handleActivate() {
  let activateWill = true;
  chrome.storage.sync.set({ activateWill });
}
function handleDesactivate() {
  let activateWill = false;
  chrome.storage.sync.set({ activateWill });
}

activeImage.addEventListener("click", handleActivate);
desactivateImage.addEventListener("click", handleDesactivate);
