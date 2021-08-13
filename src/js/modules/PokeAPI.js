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

  async getPokemonInfo() {
    const pokemonInfo = await this.#initPokemonSearch(this.#url);

    return pokemonInfo;
  }
}
