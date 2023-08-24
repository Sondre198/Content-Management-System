import { api, keys } from "./keys.js"
const urlParams = new URLSearchParams(window.location.search)
const gameId = urlParams.get("gameId")
try {
    let response = await fetch(api + "/products/" + gameId +"?"+keys)
    if (!response.ok)
        throw new Error("Not found")
    let game = await response.json()

    document.getElementById("spinner").remove()

    document.getElementById("game_title").innerText = game.name
    document.getElementById("game_title2").innerText = game.name
    document.getElementById("game_description").innerHTML = game.description
    document.getElementById("game_price").innerHTML = game.price_html
    document.getElementById("game_ageRating").innerText = "12+"

    const newestReleaseImg = document.getElementById("game_image")
    newestReleaseImg.src = game.images[0].src
    newestReleaseImg.alt = game.name + " cover"
} catch (e) {
    console.log(e)
    //location.href="404.html"
}
