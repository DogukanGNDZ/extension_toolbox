//window.location.replace("http://www.google.be");

let willSmithImages = [
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/BrT6JuS0boRe5dXrvkKQ4rzGNME/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/10/215/n/1922283/ad358e065c60f5ad56e7e8.61160339_/i/Funny-Tweets-About-Smith-Genie-Aladdin-Trailer.jpg",
];

console.log("hefiruhsfiuh");
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = willSmithImages[0];
  imgs[i].srcset = willSmithImages[0];
}
