const drawActivate = document.getElementById("draw");
const drawDesactivate = document.getElementById("drawDesactivate");
const screenshot = document.getElementById("screenshot");

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

function handleScreenshot() {
  chrome.tabs.captureVisibleTab((dataUrl) => {
    chrome.downloads.download({
      filename: "download.jpg",
      url: dataUrl,
    });
  });
}

drawActivate.addEventListener("click", handleActivateDraw);
drawDesactivate.addEventListener("click", handleDesactivateDraw);

screenshot.addEventListener("click", handleScreenshot);
