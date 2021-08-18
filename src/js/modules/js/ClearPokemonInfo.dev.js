"use strict";

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