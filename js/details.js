//  import { createCard, showGameData } from "../js/ui.js"; 
//  const params = new URLSearchParams(window.location.search); 
// const gameName = params.get("gameName");
// const category = params.get("category");
// const platform = params.get("platform");
// const imgUrl = params.get("imgUrl");
// const gameUrl = params.get("gameUrl");



function showGameData(gameName, caty, platform, imgUrl, gameUrl,shortDescription) {
  document.getElementById("gimg").src = imgUrl;
  document.getElementById("h3").textContent = gameName;
  document.getElementById("span1").textContent = caty;
  document.getElementById("span2").textContent = platform;
  document.getElementById("anker").href = gameUrl;
  document.getElementById("gameDescription").textContent = shortDescription; 
}

showGameData( gameName,category, platform, imgUrl, gameUrl);