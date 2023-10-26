const searchBar = document.querySelector("#pokemon-name");
const searchBtn = document.querySelector(".search-button");
const randomBtn = document.querySelector(".random-button");
const errorMsg = document.querySelector(".error-msg");

const popup = document.querySelector(".popup-container");
const closePopup = document.querySelector(".close-popup");

const popupName = document.querySelector(".popup-pokemon-name");
const popupDescitpion = document.querySelector(".pokemon-description");
const popupImg = document.querySelector(".pokemon-img");
const popupHp = document.querySelector(".stat-hp");
const popupSpeed = document.querySelector(".stat-speed");
const popupAtk = document.querySelector(".stat-atk");
const popupAtkSpe = document.querySelector(".stat-atkspe");
const popupDef = document.querySelector(".stat-def");
const popupDefSpe = document.querySelector(".stat-defspe");

let pokemonData = {};

searchBtn.addEventListener("click", () => {
    searchPokemon(searchBar.value);
});

randomBtn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 1018);
    console.log(randomNumber)
    searchPokemon(randomNumber)
});

closePopup.addEventListener("click", () => {
    pokemonData = {};
    popup.style.display = "none";
})

function searchPokemon (id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${typeof(id) !== "number" ? id.toLowerCase() : id}`)
    .then(res => {
        if(res.ok){
            return res.json();
        }
        if(res.status == 404){
            errorMsg.innerHTML = "The pokémon was not found !"
        }
    })
    .then(data => {
        pokemonData.id = data.id;
        pokemonData.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        pokemonData.img = data.sprites.front_default;
        pokemonData.stats = data.stats;

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`)
        .then(res => res.json())
        .then(data => {

            popupName.innerHTML = pokemonData.name;
            popupDescitpion.innerHTML = "No description found !";
            if(data.flavor_text_entries[0] !== undefined){
                popupDescitpion.innerHTML = data.flavor_text_entries[0].flavor_text;
            }
            popupImg.src = pokemonData.img;
            popupHp.innerHTML = `HP : ${pokemonData.stats[0].base_stat}`
            popupSpeed.innerHTML = `SPEED : ${pokemonData.stats[5].base_stat}`
            popupAtk.innerHTML = `ATK : ${pokemonData.stats[1].base_stat}`
            popupAtkSpe.innerHTML = `ATK SPE : ${pokemonData.stats[2].base_stat}`
            popupDef.innerHTML = `DEF : ${pokemonData.stats[3].base_stat}`
            popupDefSpe.innerHTML = `DEF SPE : ${pokemonData.stats[4].base_stat}`

            popup.style.display = "flex";
        });
    })
    .catch(error => {
        console.log(error);
    });

     
}