"use strict";

function perra() {
  var ingreso = document.getElementById("ingreso").value;
  var hola = new Pokemon(ingreso);
  hola.showPokemonId();
  hola.showPokemonName();
  hola.showPokemonAbilities();
  hola.showPokemonSprite();
  hola.showPokemonTypes();
  hola.showPokemonStats();
}