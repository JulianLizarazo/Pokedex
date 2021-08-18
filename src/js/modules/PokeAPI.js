/* this class calls the pokemon api to get the data about the pokemon*/

class PokeAPI {
  #url;

  constructor(pokemonName) {
    this.#url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  }

  async #searchPokemonData(pokemonUrl) {
    const fetchPokemonData = await fetch(pokemonUrl);

    if (fetchPokemonData.status !== 404) {
      const parsePokemonData = fetchPokemonData.json();

      return parsePokemonData;
    } else {
      this.#missigno();
    }
  }
  //this function works like "404 not found" but in pokemon.
  #missigno() {
    clearInfoPokemon();
    console.log("estoy mostrando a missigno");
    const missigno = "/Pokedex/assets/Missingno.png";
    window.image.setAttribute("src", missigno);

    const showMissignoText = document.getElementById("pokemonNameText");
    const missignoError =
      "Missingno came out! That means you either entered the wrong Pokémon name or entered the wrong pokemon ID number :(. Check that the Pokémon name is spelled correctly or the ID is between 1 and 893!";
    showMissignoText.innerHTML = missignoError;
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
