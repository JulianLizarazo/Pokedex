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

function gameBoyScreenOff() {
  var clearImg = document.getElementById("image");
  clearImg.style.display = "none";
}

verifyHour();
window.onkeydown = searchByEnterKeyWord;
gameBoyScreenOff();