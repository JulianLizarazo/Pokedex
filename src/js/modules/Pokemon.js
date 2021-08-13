//import PokeAPI from "./PokeAPI.js";

class Pokemon {
  #pokemon;

  constructor(pokemonNameOrId) {
    this.#pokemon = new PokeAPI(pokemonNameOrId);
  }

  async showPokemonName() {
    const pokemonName = await this.#pokemon.getPokemonInfo();
    const showPokemonName = document.getElementById("pokemonName");
    showPokemonName.innerHTML = pokemonName.name;
  }

  async showPokemonId() {
    const pokemonId = await this.#pokemon.getPokemonInfo();
    const showPokemonId = document.getElementById("pokemonId");
    showPokemonId.innerHTML = pokemonId.id;
  }

  async showPokemonGeneration() {
    const pokemonInfo = await this.#pokemon.getPokemonInfo();
    const pokemonId = pokemonInfo.id;
    const showPokemonGeneration = document.getElementById("pokemonGeneration");

    const pokemonGeneration = this.#getPokemonGeneration(pokemonId);

    showPokemonGeneration.innerHTML = pokemonGeneration;
  }

  #getPokemonGeneration(pokemonId) {
    let pokemonGeneration = "";

    if (pokemonId > 0 && pokemonId <= 151) {
      pokemonGeneration = "I";
    } else if (pokemonId > 151 && pokemonId <= 251) {
      pokemonGeneration = "II";
    } else if (pokemonId > 251 && pokemonId <= 386) {
      pokemonGeneration = "III";
    } else if (pokemonId > 386 && pokemonId <= 493) {
      pokemonGeneration = "IV";
    } else if (pokemonId > 493 && pokemonId <= 649) {
      pokemonGeneration = "V";
    } else if (pokemonId > 649 && pokemonId <= 721) {
      pokemonGeneration = "VI";
    } else if (pokemonId > 721 && pokemonId <= 809) {
      pokemonGeneration = "VII";
    } else if (pokemonId > 809 && pokemonId <= 898) {
      pokemonGeneration = "VIII";
    }

    return pokemonGeneration;
  }

  async showPokemonSprite() {
    const pokemonSprite = await this.#pokemon.getPokemonInfo();
    window.image.setAttribute("src", pokemonSprite.sprites.front_default);
  }

  async showPokemonTypes() {
    const pokemonTypes = await this.#pokemon.getPokemonInfo();
    let types = document.getElementById("tipos");

    pokemonTypes.types.forEach(
      (pokemonType) => (types.innerText += pokemonType.type.name + "\n")
    );
  }

  async showPokemonAbilities() {
    const pokemonAbilities = await this.#pokemon.getPokemonInfo();
    let abilities = document.getElementById("habilidad");

    pokemonAbilities.abilities.forEach((pokemonAbility) => {
      abilities.innerText += pokemonAbility.ability.name + "/";
    });
  }

  async showPokemonStats() {
    const pokemonStats = await this.#pokemon.getPokemonInfo();
    let pokemonText = document.getElementById("stats");

    pokemonStats.stats.forEach((pokemonStat) => {
      pokemonText.innerText +=
        pokemonStat.stat.name + ": " + pokemonStat.base_stat + "\n";
    });
  }
}
