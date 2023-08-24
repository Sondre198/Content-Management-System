import { api, keys } from "./keys.js"
let response = await fetch(api + "/products?" + keys)
let games = await response.json() 

let html = ""
document.getElementById("spinner").remove()

for (const game of games){
    html += `
    <div class="game">
        <div class="game_img"><img src="${game.images[0].src}" alt="${game.name} cover"></div>

        <p>${game.name}</p>

        <div class="purchase_button"><a href="product_page.html?gameId=${game.id}">Add to cart: ${game.price_html}$</a></div>
    </div>
    `;
}

document.getElementById("all_games_container").innerHTML=html