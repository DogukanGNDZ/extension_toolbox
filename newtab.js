const cont = document.getElementById("content");
const Affichage = document.createElement("div");
let nameB;
let personalisation;
Affichage.id = "aff";

chrome.storage.sync.get("perso", ({ perso }) => {
  personalisation = perso;
});

chrome.storage.sync.get("nameButton", ({ nameButton }) => {
  nameB = nameButton;
  if (nameB === "citation") {
    Affichage.innerHTML = "d";
    cont.appendChild(Affichage);
  }
  if (nameB === "anecdotes") {
    Affichage.innerHTML = "anec";
    cont.appendChild(Affichage);
  }
  if (nameB === "enigmes") {
    Affichage.innerHTML = "enigmes";
    cont.appendChild(Affichage);
  }
  if (nameB === "personalise") {
    Affichage.innerHTML = personalisation;
    cont.appendChild(Affichage);
  }
});
