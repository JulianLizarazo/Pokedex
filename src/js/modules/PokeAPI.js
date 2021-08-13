class PokeAPI {
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

    return pokemonId;
  }

  async getPokemonSprite() {
    const pokemonSprite = await this.#initPokemonSearch(this.#url);
    return pokemonSprite;
  }

  async getPokemonAbilities() {
    const pokemonAbilites = await this.#initPokemonSearch(this.#url);

    return pokemonAbilites;
    
  }

  async getPokemonTypes() {
    const pokemonTypes = await this.#initPokemonSearch(this.#url);

    return pokemonTypes;
    
  }

  async getPokemonStats() {
    const pokemonStats = await this.#initPokemonSearch(this.#url);

    return pokemonStats;
    
  }
}





