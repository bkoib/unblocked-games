const gameList = document.getElementById("game-list");
const gameFrame = document.getElementById("game-frame");
const searchInput = document.getElementById("search");

let games = [];

fetch("games.json")
.then(res => res.json())
.then(data => {

games = data.games;

displayGames(games);

});

function displayGames(list){

gameList.innerHTML = "";

list.forEach(game => {

const btn = document.createElement("div");

btn.className = "game-btn";
btn.innerText = game.name;

btn.onclick = () => {
gameFrame.src = game.url;
};

gameList.appendChild(btn);

});

}

searchInput.addEventListener("input", () => {

const search = searchInput.value.toLowerCase();

const filtered = games.filter(game =>
game.name.toLowerCase().includes(search)
);

displayGames(filtered);

});