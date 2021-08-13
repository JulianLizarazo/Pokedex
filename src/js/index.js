
function searchPokemon() {
  clearInfoPokemon();

  const nameOrIdIngresed = document.getElementById("ingreso").value;
  const nameOrIdIngresedInLowerCase = nameOrIdIngresed.toLowerCase();
  const pokemon = new Pokemon(nameOrIdIngresedInLowerCase);

  pokemon.showPokemonId();
  pokemon.showPokemonName();
  pokemon.showPokemonGeneration();
  pokemon.showPokemonAbilities();
  pokemon.showPokemonSprite();
  pokemon.showPokemonTypes();
  pokemon.showPokemonStats();
}

function verifyHour(){
  const stylesInCommon = 'background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;';
  const body = document.getElementById("body");
  const time = new Date();

  if(time.getHours() < 18 && time.getHours() > 6){
    body.setAttribute("style", 'background-image: url("/Pokedex/assets/imgDay.jpg");' + stylesInCommon);
  }else{
    body.setAttribute("style", 'background-image: url("/Pokedex/assets/imgNight.jpg");' + stylesInCommon)
  }
}

function clearInfoPokemon(){
  const clearTypes = document.getElementById("tipos")
  clearTypes.innerHTML= '';
  const clearAbilities = document.getElementById("habilidad")
  clearAbilities.innerHTML= '';
  const clearStats = document.getElementById("stats")
  clearStats.innerHTML= '';
}

verifyHour();







