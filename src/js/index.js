
function searchPokemon() {
  const nameOrIdIngresed = document.getElementById("ingreso").value;
  const pokemon = new Pokemon(nameOrIdIngresed);

  pokemon.showPokemonId();
  pokemon.showPokemonName();
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

verifyHour();







