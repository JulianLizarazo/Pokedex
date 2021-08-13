//import PokeAPI from "./PokeAPI.js";

class Pokemon {
  #pokemon;

  constructor(pokemonNameOrId) {
    this.#pokemon = new PokeAPI(pokemonNameOrId);
  }

  async showPokemonName() {
    const pokemonName = await this.#pokemon.getPokemonName();
    const showPokemonName = document.getElementById("pokemonName");
    showPokemonName.innerHTML = pokemonName.name;
  }

  async showPokemonId() {
    const pokemonId = await this.#pokemon.getPokemonId();
    const showPokemonName = document.getElementById("pokemonId");
    showPokemonName.innerHTML = pokemonId.id;
  }

  async showPokemonSprite() {
    const pokemonSprite = await this.#pokemon.getPokemonSprite();
    window.imagen.setAttribute("src", pokemonSprite.sprites.front_default);
  }

  async showPokemonTypes() {
    const pokemonTypes = await this.#pokemon.getPokemonTypes();
    let types = document.getElementById("tipos");

    pokemonTypes.types.forEach(
      (pokemonType) => (types.innerText += pokemonType.type.name + "\n")
    );
  }

  async showPokemonAbilities() {
    const pokemonAbilities = await this.#pokemon.getPokemonAbilities();
    let abilities = document.getElementById("habilidad");

    pokemonAbilities.abilities.forEach((pokemonAbility) => {
      abilities.innerText += pokemonAbility.ability.name + "/";
    });
  }

  async showPokemonStats() {
    const pokemonStats = await this.#pokemon.getPokemonAbilities();
    let pokemonText = document.getElementById("stats");

    pokemonStats.stats.forEach((pokemonStat) => {
      pokemonText.innerText +=
        pokemonStat.stat.name + ": " + pokemonStat.base_stat + "\n";
    });
  }
}

/*
function perra() {
  const ingreso = document.getElementById("ingreso").value;
  const hola = new Pokemon(ingreso);

  hola.showPokemonId();
  hola.showPokemonName();
  hola.showPokemonAbilities();
  hola.showPokemonSprite();
  hola.showPokemonTypes();
  hola.showPokemonStats();
}
  */