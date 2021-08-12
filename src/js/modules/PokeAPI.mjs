export class PokeAPI {
  #url;
   

  constructor(pokemonName) {
    this.#url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  }


  async #searchPokemonData(pokemonUrl) {
    const fetchPokemonData = await fetch(pokemonUrl);
    const parsePokemonData = fetchPokemonData.json();
    return parsePokemonData;
  }

  async #initPokemonSearch(pokemonUrl) {
    const pokemonInfo = await this.#searchPokemonData(pokemonUrl);
    return pokemonInfo;
  }

  async getPokemonName() {
    const pokemonData = await this.#initPokemonSearch(this.#url);
    return pokemonData;
    
  }

  async getPokemonId() {
    const pokemonId = await this.#initPokemonSearch(this.#url);
    const showPokemonName = document.getElementById("pokemonId");
    showPokemonName.innerHTML = pokemonId.id;
  }

  async getPokemonSprite() {
    const pokemonSprite = await this.#initPokemonSearch(this.#url);
    return pokemonSprite;
  }

  async getPokemonAbilities() {
    const pokemonAbilites = await this.#initPokemonSearch(this.#url);
    var abilities = document.getElementById("habilidad");
    for (let i = 0; i < pokemonAbilites.abilities.length; i++) {
      abilities.innerText += pokemonAbilites.abilities[i].ability.name + "/ ";
    }
  }

  async getPokemonTypes() {
    const pokemonTypes = await this.#initPokemonSearch(this.#url);
    var types = document.getElementById("tipos");

    for (let i = 0; i < pokemonTypes.types.length; i++) {
      types.innerText += pokemonTypes.types[i].type.name + "/ ";
    }
  }

  async getPokemonStats() {
    const pokemonStats = await this.#initPokemonSearch(this.#url);
    var pokemonText = document.getElementById("stats");
    for (let i = 0; i < pokemonStats.stats.length; i++) {
      pokemonText.innerText +=
        pokemonStats.stats[i].stat.name +
        ": " +
        pokemonStats.stats[i].base_stat +
        ", ";
    }
  }
}

export default PokeAPI;
/*
function perra() {
  ingreso = document.getElementById("ingreso").value;
  const hola = new PokeAPI(ingreso);

  hola.getPokemonId();
  hola.getPokemonName();
  hola.getPokemonAbilities();
  hola.getPokemonSprite();
  hola.getPokemonTypes();
  hola.getPokemonStats();
}
*/