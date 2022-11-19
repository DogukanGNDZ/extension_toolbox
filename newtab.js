const cont = document.getElementById("content");
const Affichage = document.createElement("div");
let nameB;
let personalisation;
Affichage.id = "aff";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let citation = [
  "Les hommes piétinent le bonheur au lieu de le remuer comme une terre délicate. [Franz Hellens] ",
  "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur. [Nelson Mandela]",
  "La beauté est dans les yeux de celui qui regarde. [Oscar Wilde]",
  "Fais de ta vie un rêve, et d'un rêve, une réalité.[Antoine de Saint Exupéry]",
  "Le souvenir, c'est la présence invisible. [Victor Hugo]",
  "Un problème sans solution est un problème mal posé.[Albert Einstein]",
  "Le premier savoir est le savoir de mon ignorance : c'est le début de l'intelligence.[Socrate]",
  "Quand on veut on peut, quand on peut on doit.[Napoléon Bonaparte]",
  "A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.[Martin Luther King]",
];
let anecdotes = [
  "Marie Antoinette créa un brevet particulier en janvier 1784. Le « Coureur de Vin », telle est la personne à qui on attribuait cette charge, et qui devait suivre la reine dans tous ses déplacements, en portant dans une serviette du pain, un flacon de vin et quelques victuailles.",
  "Le fameux calendrier maya ne se termina pas le 21 décembre 2012 comme d'imprudents augures l'avaient annoncé. Il passa tout simplement du 12.19.19.17.19 (le 20) au 13.0.0.0.0 (le 21), comme nous sommes passés du 31.12.1999 au 01.01.2000. L'apocalypse attendra encore un peu.",
  "La guerre de Cent Ans couvre en fait une période de 116 ans (1337 à 1453) pendant laquelle s’affrontent la France et l’Angleterre lors de nombreux conflits, entrecoupés de trêves plus ou moins longues.",
  "Jusqu'au XVIIIe siècle, les français pensaient que les bulles du champagne était l'oeuvre du diable. En 1694, le médecin de Louis XIV lui défend de boire du champagne au prétexte que cette boisson est mauvaise pour sa goutte !",
  "Si on empilait les 7 milliards d’humains les uns sur les autres (genre lors d’une grosse soirée), on formerait un cube de 2,3 km³. Ce qui remplirait entièrement le lac Léman.",
  "L'air dans les paquets de chips sert à protéger les chips contre les chocs. Grâce à cela, vos chips ne seront pas en miettes quand vous voudrez les déguster !",
  "Les pandas ont l'os du poignet tellement allongé, qu'ils sont capables de s'en servir comme un pouce.",
  "Les hiboux ont l'ouïe de leur oreille droite bien plus développée que celle de leur oreille gauche. Cela leur permet notamment de déterminer de quel côté viennent les bruits, mais aussi de savoir si cela vient du dessous ou du dessus",
  "Au moins la moitié de l'oxygène de la Terre est produit par l'océan grâce aux phytoplanctons. Pourtant, beaucoup en attribue tout le mérite aux plantes terrestres.",
];
let enigmes = [
  "Cela s'allonge et rétrécit en même temps. De quoi parle-t-on ?",
  "Quand je suis frais, je suis chaud. Qui suis-je ?",
  "Il nous voit vieillir sans rien dire car il est très poli. Qui est-il ?",
  "je tombe sans me faire mal, qui suis-je?",
  "Je suis quelque chose qui t'appartient mais que les gens utilisent plus que toi, qui suis-je ?",
];
let enigmesResult = [
  "De la vie car plus le temps passe plus notre temps de vie diminue",
  "Le pain",
  "Le miroir",
  "la nuit !",
  "Ton prénom",
];

chrome.storage.sync.get("perso", ({ perso }) => {
  personalisation = perso;
});

chrome.storage.sync.get("nameButton", ({ nameButton }) => {
  nameB = nameButton;
  if (nameB === "citation") {
    Affichage.innerText = citation[getRandomInt(9)];
    cont.appendChild(Affichage);
  }
  if (nameB === "anecdotes") {
    Affichage.innerText = anecdotes[getRandomInt(9)];
    cont.appendChild(Affichage);
  }
  if (nameB === "enigmes") {
    let ranNum = getRandomInt(5);
    Affichage.innerText =
      enigmes[ranNum] + " \n\n\n\nLa réponse est = " + enigmesResult[ranNum];
    cont.appendChild(Affichage);
  }
  if (nameB === "personalise") {
    Affichage.innerText = personalisation;
    cont.appendChild(Affichage);
  }
});
