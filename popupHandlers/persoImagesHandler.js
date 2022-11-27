const newLien = document.getElementById("lienImage");
const saveLien = document.getElementById("saveLien");
const elementImagesPerso = document.getElementById("imagesPersoDiv");
const modifyLien = document.getElementById("modifyLien");
const textConfirm = document.getElementById("textConfirm");

function constructImages() {
  chrome.storage.sync.get("tablePerso", ({ tablePerso }) => {
    var i = 0;
    tablePerso.forEach((element) => {
      const textArea = document.createElement("textarea");
      textArea.id = i;
      textArea.value += element;
      elementImagesPerso.appendChild(textArea);
      i++;
    });
  });
}

function handleNewLien() {
  chrome.storage.sync.get("tablePerso", (data) => {
    let tablePerso = data.tablePerso;
    tablePerso.push(newLien.value);
    chrome.storage.sync.set({ tablePerso });
  });
  const textValue = document.createElement("h3");
  textValue.innerHTML = "Nouveau lien ajouter";
  textConfirm.appendChild(textValue);
}

function handleModifiyLien() {
  chrome.storage.sync.get("tablePerso", (data) => {
    let tablePerso = data.tablePerso;
    for (let i = 0; i < tablePerso.length; i++) {
      const elementLien = document.getElementById(`${i}`);

      if (tablePerso[i] != elementLien.value) {
        tablePerso[i] = elementLien.value;
        const textValue = document.createElement("h3");
        textValue.innerHTML = "Image Modifier";
        textConfirm.appendChild(textValue);
      }
    }
    chrome.storage.sync.set({ tablePerso });
  });
}

saveLien.addEventListener("click", handleNewLien);
modifyLien.addEventListener("click", handleModifiyLien);
constructImages();
