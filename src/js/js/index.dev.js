"use strict";

function searchPokemon() {
  var nameOrIdIngresed = document.getElementById("ingreso").value;
  var pokemon = new Pokemon(nameOrIdIngresed);
  pokemon.showPokemonId();
  pokemon.showPokemonName();
  pokemon.showPokemonAbilities();
  pokemon.showPokemonSprite();
  pokemon.showPokemonTypes();
  pokemon.showPokemonStats();
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

verifyHour();