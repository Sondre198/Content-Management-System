import { api, keys } from "./keys.js"
let games = await fetch(api + "/products?" + keys).then(r=>r.json())

let featuredGames = await fetch(api + "/products?featured=true&" + keys).then(r=>r.json())
let newestRelease = featuredGames[0]
document.getElementById("spinner").remove()
document.getElementById("newest_release_title").innerText = newestRelease.name
const newestReleaseImg = document.getElementById("newest_release_image")
newestReleaseImg.src = newestRelease.images[0].src
newestReleaseImg.alt = newestRelease.name + " cover"
const newestReleaseLink = document.getElementById("newest_release_link")
newestReleaseLink.href = "product_page.html?gameId=" + newestRelease.id
newestReleaseLink.innerHTML ="Add to cart: " + newestRelease.price_html + "$"

function setGameInfo(container, game){
    container.getElementsByTagName("h3")[0].innerText = game.name
    const img = container.getElementsByTagName("img")[0]
    img.src = game.images[0].src
    img.alt = game.name + " cover"
    const link = container.getElementsByTagName("a")[0]
    link.href = "product_page.html?gameId=" + game.id
    link.innerHTML ="Add to cart: " + game.price_html + "$"
}

setGameInfo(document.getElementById("game_1"), games[1])
setGameInfo(document.getElementById("game_2"), games[2])
setGameInfo(document.getElementById("game_3"), games[3])
setGameInfo(document.getElementById("game_4"), games[4])