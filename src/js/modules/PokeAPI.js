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
      console.log("estoy en el else");
      this.#missigno();
    }
  }

  #missigno() {
    clearInfoPokemon();
    console.log("estoy mostrando a missigno");
    const missigno = "/Pokedex/assets/Missingno.png";
    window.image.setAttribute("src", missigno);

    const showMissignoText = document.getElementById("pokemonNameText");
    const missignoError =
      "Te salió Missigno! Eso significa, que ingresaste el nombre del pokemon mal o ingresaste un numero de ID incorrecto :(. Verifica que el nombre del pokemon esté bien escrito, o que el ID esté entre 1 y 893!";
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
