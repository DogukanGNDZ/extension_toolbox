let willSmithImages = [
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/BrT6JuS0boRe5dXrvkKQ4rzGNME/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/10/215/n/1922283/ad358e065c60f5ad56e7e8.61160339_/i/Funny-Tweets-About-Smith-Genie-Aladdin-Trailer.jpg",
  "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/will-smith-foto.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
  "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_will_smith_ator3.jpg?quality=70&strip=info",
  "https://conteudo.imguol.com.br/c/entretenimento/e3/2020/07/09/will-smith-1594320007897_v2_450x337.jpg",
  "https://i0.wp.com/mixdeseries.com.br/wp-content/uploads/2018/07/will-smith-4-e1534947669898.jpg?fit=871%2C499&ssl=1",
];

let catImages = [
  "https://www.cdiscount.com/pdt2/1/7/4/1/700x700/sod0194452397174/rw/tableau-de-fleurs-mignons-dessin-chat-mignon-diama.jpg",
  "https://www.slate.fr/sites/default/files/styles/1060x523/public/chat_2.jpg",
  "https://www.madmoizelle.com/wp-content/uploads/2017/01/chat-mignon-internet.jpg",
  "https://ikonal.com/wp-content/uploads/2021/03/100-chats-1662031-1-700x375.jpg",
  "https://media-mcetv.ouest-france.fr/wp-content/uploads/2017/10/Sciences-les-chats-ne-sont-pas-si-mignons-1-e1509372332222.jpg",
  "https://deshommesetdeschats.com/wp-content/uploads/2016/10/chat-rigolo-image-drole-de-chat-marrant-photos-de-chats-rigolos-photo-d-animaux-chat-drole-chat-comique-image-de-chaton-mignon-images-de-chatons-photo-de-chat-image.jpg",
  "https://i.ytimg.com/vi/KzwLbYIcIcM/maxresdefault.jpg",
  "https://img1.picmix.com/output/pic/normal/0/3/0/5/9825030_db2d6.gif",
  "https://www.chat-mignon.com/photos/chats-droles.jpg",
];

const imgs = document.getElementsByTagName("img");

chrome.storage.sync.get("activateWill", (data) => {
  if (data.activateWill) {
    console.log("hefiruhsfiuh");

    chrome.storage.sync.get("setImage", (data) => {
      if (data.setImage == "will") {
        for (let i = 0; i < imgs.length; i++) {
          const randomImg = Math.floor(Math.random() * willSmithImages.length);
          imgs[i].src = willSmithImages[randomImg];
          imgs[i].srcset = willSmithImages[randomImg];
        }
      }
      if (data.setImage == "cat") {
        for (let i = 0; i < imgs.length; i++) {
          const randomImg = Math.floor(Math.random() * catImages.length);
          imgs[i].src = catImages[randomImg];
          imgs[i].srcset = catImages[randomImg];
        }
      }

      if (data.setImage == "perso") {
        chrome.storage.sync.get("tablePerso", (data) => {
          console.log(data.tablePerso);
          for (let i = 0; i < imgs.length; i++) {
            const randomImg = Math.floor(
              Math.random() * data.tablePerso.length
            );
            imgs[i].src = data.tablePerso[randomImg];
            imgs[i].srcset = data.tablePerso[randomImg];
          }
        });
      }
    });
  }
});
