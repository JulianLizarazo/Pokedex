"use strict";

function searchPokemon() {
  var nameOrIdIngresed, nameOrIdIngresedInLowerCase, pokemon;
  return regeneratorRuntime.async(function searchPokemon$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          clearInfoPokemon();
          nameOrIdIngresed = document.getElementById("insertNameOrId").value;
          nameOrIdIngresedInLowerCase = nameOrIdIngresed.toLowerCase();
          pokemon = new Pokemon(nameOrIdIngresedInLowerCase);
          verifyPokemonSprite(pokemon);
          correctSearch(pokemon);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function verifyPokemonSprite(pokemon) {
  var shinyNumber1 = Math.floor(Math.random() * 1000 + 1);
  var shinyNumber2 = Math.floor(Math.random() * 1000 + 1);
  console.log(shinyNumber1);
  console.log(shinyNumber2);

  if (shinyNumber1 === shinyNumber2) {
    pokemon.showPokemonSpriteShiny();
  } else {
    pokemon.showPokemonSprite();
  }
}

function pokemonRandom() {
  clearInfoPokemon();
  var buttonRandom = document.getElementById("pokemonRandom");
  buttonRandom.style.display = "none";
  var idPokemonRandom = 0;
  var bruxishId = 779;
  var probabilityOfBruxish = Math.floor(Math.random() * 100 + 1);

  if (probabilityOfBruxish <= 40) {
    idPokemonRandom = bruxishId;
  } else {
    idPokemonRandom = Math.floor(Math.random() * 893 + 1);
  }

  var pokemonRandom = new Pokemon(idPokemonRandom);
  verifyPokemonSprite(pokemonRandom);
  correctSearch(pokemonRandom);
}

function correctSearch(pokemon) {
  pokemon.showPokemonName();
  pokemon.showPokemonId();
  pokemon.showPokemonGeneration();
  pokemon.showPokemonAbilities();
  pokemon.showPokemonTypes();
  pokemon.showPokemonStats();
}

function searchByEnterKeyWord() {
  var enter = event.keyCode;

  if (enter == 13) {
    searchPokemon();
  }
}

function verifyHour() {
  var stylesInCommon = "background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;";
  var body = document.getElementById("body");
  var time = new Date();

  if (time.getHours() < 18 && time.getHours() > 6) {
    body.setAttribute("style", 'background-image: url("/Pokedex/assets/imgDay.jpg");' + stylesInCommon);
  } else {
    body.setAttribute("style", 'background-image: url("/Pokedex/assets/imgNight.jpg");' + stylesInCommon);
  }
}

function clearInfoPokemon() {
  var clearTypesText = document.getElementById("tiposText");
  clearTypesText.innerHTML = "";
  eliminatePokemonTypes();
  var clearNameText = document.getElementById("pokemonNameText");
  clearNameText.innerHTML = "";
  var clearName = document.getElementById("pokemonName");
  clearName.innerHTML = "";
  var clearIdText = document.getElementById("pokemonIdText");
  clearIdText.innerHTML = "";
  var clearId = document.getElementById("pokemonId");
  clearId.innerHTML = "";
  var clearGenerationText = document.getElementById("pokemonGenerationText");
  clearGenerationText.innerHTML = "";
  var clearGeneration = document.getElementById("pokemonGeneration");
  clearGeneration.innerHTML = "";
  var clearAbilitiesText = document.getElementById("habilidadText");
  clearAbilitiesText.innerHTML = "";
  var clearAbilities = document.getElementById("habilidad");
  clearAbilities.innerHTML = "";
  var clearStatsText = document.getElementById("statsText");
  clearStatsText.innerHTML = "";
  var clearStats = document.getElementById("stats");
  clearStats.innerHTML = "";
}

function gameBoyScreenOff() {
  var clearImg = document.getElementById("image");
  clearImg.style.display = "none";
}

verifyHour();
window.onkeydown = searchByEnterKeyWord;
gameBoyScreenOff();