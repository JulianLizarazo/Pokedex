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
          /*console.log(pokemon.showPokemonName())
          const prueba = await pokemon.showPokemonName();
          console.log(prueba)
          if(prueba !== 404){
            
          } else {
            "Un solo error por faovr :'v"
          }*/

          correctSearch(pokemon);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function correctSearch(pokemon) {
  pokemon.showPokemonName();
  pokemon.showPokemonId();
  pokemon.showPokemonGeneration();
  pokemon.showPokemonAbilities();
  pokemon.showPokemonSprite();
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

verifyHour();
window.onkeydown = searchByEnterKeyWord;