

export function createCard(
    gameName,
    category,
    platform,
    shortDescription,
    imgUrl,
    gameUrl
) {
    // base card
    const crd = document.createElement("div");
    crd.id = "crd";
    crd.className = "col-lg-3 col-md-6 py-3";
    crd.addEventListener("click", (e) => {
        // استدعي دالة عرض التفاصيل
        showGameData(gameName, category, platform, imgUrl, gameUrl, shortDescription);
         document.querySelector("nav").classList.add("d-none"); // إخفاء النافبار
  document.querySelector(".container-fluid").classList.add("d-none"); // إخفاء الهيدر
  document.getElementById("cardContainer").classList.add("d-none"); // إخفاء الكروت
  document.querySelector(".loading").classList.add("d-none"); // إخفاء اللودينج لو ظاهر

  // إظهار تفاصيل اللعبة
    });
    // Outer div
    const card = document.createElement("div");
    card.id = "card";
    card.className = "inner rounded-2";

    // mainCard div
    const mainCard = document.createElement("div");
    mainCard.className = "mainCard px-3 pt-3";

    // figure
    const figure = document.createElement("figure");
    figure.className = "gameimg rounded-4 position-relative";

    const img = document.createElement("img");
    img.className = "rounded-4";
    img.src = imgUrl;
    img.alt = gameName;

    const blackDiv = document.createElement("div");
    blackDiv.className = "black position-absolute";

    figure.appendChild(img);
    figure.appendChild(blackDiv);

    // figcaption
    const figcaption = document.createElement("figcaption");
    figcaption.className = "d-flex flex-column";

    const gameNameDiv = document.createElement("div");
    gameNameDiv.className =
        "gameName d-flex comfortaa text-light justify-content-between px-2 align-items-center";

    const h3 = document.createElement("h3");
    h3.className = "smallFont pt-2";
    h3.textContent = gameName;

    const spanFree = document.createElement("span");
    spanFree.className = "px-2 py-1 rounded-3 fw-bolder";
    spanFree.textContent = "Free";

    gameNameDiv.appendChild(h3);
    gameNameDiv.appendChild(spanFree);

    const p = document.createElement("p");
    p.className = "text-center pt-2 pb-0";
    p.textContent = shortDescription;

    figcaption.appendChild(gameNameDiv);
    figcaption.appendChild(p);

    // Append figure and figcaption to mainCard
    mainCard.appendChild(figure);
    mainCard.appendChild(figcaption);

    // caty div
    const catyDiv = document.createElement("div");
    catyDiv.className = "caty d-flex justify-content-between p-1";

    const spanGenre = document.createElement("span");
    spanGenre.textContent = category;

    const spanPlatform = document.createElement("span");
    spanPlatform.textContent = platform;

    catyDiv.appendChild(spanGenre);
    catyDiv.appendChild(spanPlatform);

    // Assemble everything
    card.appendChild(mainCard);
    card.appendChild(catyDiv);
    crd.appendChild(card);

    return crd;
}

export function showGameData(gameName, category, platform, imgUrl, gameUrl, shortDescription) {
    document.getElementById("cardContainer").classList.add("d-none");
    document.getElementById("gameDetails").classList.remove("d-none");

    document.getElementById("gimg").src = imgUrl;
    document.getElementById("h3").textContent = `Title: ${gameName}`;
    document.getElementById("span1").textContent = category;
    document.getElementById("span2").textContent = platform;
    document.getElementById("status").textContent = "Live";
    document.getElementById("anker").href = gameUrl;
    document.getElementById("gameDescription").textContent = shortDescription; // أضف هذا السطر

}

