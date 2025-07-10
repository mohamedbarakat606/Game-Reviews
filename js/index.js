import * as display from "../js/ui.js"; 


// Select category
let linsk = document.querySelectorAll(".nav-link");
for (let i = 0; i < linsk.length; i++) {
  const element = linsk[i];
  element.addEventListener("click", function (e) {
    linsk.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("cardContainer").innerHTML = "";
    this.classList.add("active");
    getGames(this.textContent);
  });
}

//defult value to start
getGames("mmorpg");

// get data from api
async function getGames(category) {
  const loadingDiv = document.querySelector(".loading");
  loadingDiv.classList.replace("d-none", "d-flex");
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d6553f4a1emsh357ad29080ff32ap1000a2jsn3960c68f5ae3",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    options
  ).finally(() => {
    loadingDiv.classList.replace("d-flex", "d-none");
  });
  const response = await api.json();

  // create a Class
  class game {
    constructor(
      gameName,
      category,
      platform,
      shortDescription,
      imgUrl,
      gameUrl
    ) {
      (this.gameName = gameName),
        (this.category = category),
        (this.platform = platform),
        (this.shortDescription = shortDescription),
        (this.imgUrl = imgUrl);
      this.gameUrl = gameUrl;
    }
  }

  // for loop to create cards by index number
  for (let i = 0; i < response.length; i++) {
    const element = response[i];
    let games = new game(
      element.title,
      element.genre,
      element.platform,
      element.short_description,
      element.thumbnail,
      element.game_url
    );
    let { gameName, category, platform, shortDescription, imgUrl, gameUrl } =
      games; // destructuring
    const newCard = display.createCard(
      gameName,
      category,
      platform,
      shortDescription,
      imgUrl,
      gameUrl
    );
    document.getElementById("cardContainer").appendChild(newCard);
  }
}
document.getElementById("backBtn").addEventListener("click", () => {
  document.getElementById("gameDetails").classList.add("d-none");
  document.getElementById("cardContainer").classList.remove("d-none");
           document.querySelector("nav").classList.remove("d-none"); // إخفاء النافبار
  document.querySelector(".container-fluid").classList.remove("d-none"); // إخفاء الهيدر
  document.getElementById("cardContainer").classList.remove("d-none"); // إخفاء الكروت
  
});
