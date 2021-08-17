async function searchPokemon() {
  clearInfoPokemon();
  const nameOrIdIngresed = document.getElementById("insertNameOrId").value;
  const nameOrIdIngresedInLowerCase = nameOrIdIngresed.toLowerCase();
  const pokemon = new Pokemon(nameOrIdIngresedInLowerCase);
  verifyPokemonSprite(pokemon);
  correctSearch(pokemon);
}

function verifyPokemonSprite(pokemon) {
  const shinyNumber1 = Math.floor(Math.random() * 1000 + 1);
  const shinyNumber2 = Math.floor(Math.random() * 1000 + 1);
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
  const buttonRandom = document.getElementById("pokemonRandom");
  buttonRandom.style.display = "none";
  let idPokemonRandom = 0;
  const bruxishId = 779;
  const probabilityOfBruxish = Math.floor(Math.random() * 100 + 1);

  if (probabilityOfBruxish <= 40) {
    idPokemonRandom = bruxishId;
  } else {
    idPokemonRandom = Math.floor(Math.random() * 893 + 1);
  }

  const pokemonRandom = new Pokemon(idPokemonRandom);
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
  const enter = event.keyCode;

  if (enter == 13) {
    searchPokemon();
  }
}

function verifyHour() {
  const stylesInCommon =
    "background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;";
  const body = document.getElementById("body");
  const time = new Date();

  if (time.getHours() < 18 && time.getHours() > 6) {
    body.setAttribute(
      "style",
      'background-image: url("/Pokedex/assets/imgDay.jpg");' + stylesInCommon
    );
  } else {
    body.setAttribute(
      "style",
      'background-image: url("/Pokedex/assets/imgNight.jpg");' + stylesInCommon
    );
  }
}

function clearInfoPokemon() {
  const clearTypesText = document.getElementById("tiposText");
  clearTypesText.innerHTML = "";
  eliminatePokemonTypes();
  const clearNameText = document.getElementById("pokemonNameText");
  clearNameText.innerHTML = "";
  const clearName = document.getElementById("pokemonName");
  clearName.innerHTML = "";
  const clearIdText = document.getElementById("pokemonIdText");
  clearIdText.innerHTML = "";
  const clearId = document.getElementById("pokemonId");
  clearId.innerHTML = "";
  const clearGenerationText = document.getElementById("pokemonGenerationText");
  clearGenerationText.innerHTML = "";
  const clearGeneration = document.getElementById("pokemonGeneration");
  clearGeneration.innerHTML = "";
  const clearAbilitiesText = document.getElementById("habilidadText");
  clearAbilitiesText.innerHTML = "";
  const clearAbilities = document.getElementById("habilidad");
  clearAbilities.innerHTML = "";
  const clearStatsText = document.getElementById("statsText");
  clearStatsText.innerHTML = "";
  const clearStats = document.getElementById("stats");
  clearStats.innerHTML = "";
}

function gameBoyScreenOff() {
  const clearImg = document.getElementById("image");
  clearImg.style.display = "none";
}

verifyHour();

window.onkeydown = searchByEnterKeyWord;

gameBoyScreenOff();
