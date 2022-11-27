let THY_SHALL_NOT_WORK = true;
let blocked_url = ["youtube.com", "moodle.vinci.be"];
chrome.storage.sync.set({ blocked_url });
const buttonTSNW = document.getElementById("THYSHALLNOTWORK");
function activeThyShallNotWork() {
  THY_SHALL_NOT_WORK = !THY_SHALL_NOT_WORK;
  chrome.storage.sync.set({ THY_SHALL_NOT_WORK });
  console.log(THY_SHALL_NOT_WORK);
}
buttonTSNW.addEventListener("click", activeThyShallNotWork);
const buttonABU = document.getElementById("saveUrlToBlock");
function addBlockedUrl() {
  const url = document.getElementById("urlToBlock").value;
  blocked_url.push(url);
  chrome.storage.sync.set({ blocked_url });
}
buttonABU.addEventListener("click", addBlockedUrl);
