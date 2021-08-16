"use strict";

function searchPokemon() {
  clearInfoPokemon();
  var nameOrIdIngresed = document.getElementById("insertNameOrId").value;
  var nameOrIdIngresedInLowerCase = nameOrIdIngresed.toLowerCase();
  var pokemon = new Pokemon(nameOrIdIngresedInLowerCase);
  pokemon.showPokemonId();
  pokemon.showPokemonName();
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
  var stylesInCommon = 'background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;';
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
  clearTypesText.innerHTML = '';
  var clearTypes = document.getElementById("typesBox");
  clearTypes.innerHTML = '';
  var clearAbilitiesText = document.getElementById("habilidadText");
  clearAbilitiesText.innerHTML = '';
  var clearAbilities = document.getElementById("habilidad");
  clearAbilities.innerHTML = '';
  var clearStatsText = document.getElementById("statsText");
  clearStatsText.innerHTML = '';
  var clearStats = document.getElementById("stats");
  clearStats.innerHTML = '';
  eliminatePrueba();
}

verifyHour();
window.onkeydown = searchByEnterKeyWord;