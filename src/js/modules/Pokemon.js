//import PokeAPI from "./PokeAPI.js";

class Pokemon {
  #pokemon;

  constructor(pokemonNameOrId) {
    this.#pokemon = new PokeAPI(pokemonNameOrId);
  }

  async showPokemonName() {
    const pokemonName = await this.#pokemon.getPokemonInfo();
    const showPokemonNameText = document.getElementById("pokemonNameText");
    const showPokemonName = document.getElementById("pokemonName");
    showPokemonNameText.innerHTML = "Name: ";
    showPokemonName.innerHTML = pokemonName.name;
  }

  async showPokemonId() {
    const pokemonId = await this.#pokemon.getPokemonInfo();
    const showPokemonIdText = document.getElementById("pokemonIdText");
    const showPokemonId = document.getElementById("pokemonId");
    showPokemonIdText.innerHTML = "Pokedex Position:";
    showPokemonId.innerHTML = pokemonId.id;
  }

  async showPokemonGeneration() {
    const pokemonInfo = await this.#pokemon.getPokemonInfo();
    const pokemonId = pokemonInfo.id;
    const showPokemonGenerationText = document.getElementById("pokemonGenerationText");
    const showPokemonGeneration = document.getElementById("pokemonGeneration");

    const pokemonGeneration = this.#getPokemonGeneration(pokemonId);

    showPokemonGenerationText.innerHTML = "Generation: ";
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
    const imageTagHTML = document.getElementById("image");
    imageTagHTML.style.display = "block";
    window.image.setAttribute("src", pokemonSprite.sprites.front_default);
    const shinyText = document.getElementById("easterEgg");
    shinyText.style.display = "none";
  }

  async showPokemonSpriteShiny() {
    const pokemonSprite = await this.#pokemon.getPokemonInfo();
    const imageTagHTML = document.getElementById("image");
    imageTagHTML.style.display = "block";
    window.image.setAttribute("src", pokemonSprite.sprites.front_shiny);
    const shinyText = document.getElementById("easterEgg");
    shinyText.style.display = "block";
  }

  async showPokemonTypes() {
    const pokemonTypes = await this.#pokemon.getPokemonInfo();
    const typesText = document.getElementById("tiposText");
    typesText.innerText = "Types: "
    comprobatePokemonTypes(pokemonTypes.types)
  }

  async showPokemonAbilities() {
    const pokemonAbilities = await this.#pokemon.getPokemonInfo();
    const abilitiesText = document.getElementById("habilidadText")
    let abilities = document.getElementById("habilidad");
    abilitiesText.innerText = "Abilities: "
    pokemonAbilities.abilities.forEach((pokemonAbility) => {
      abilities.innerText += pokemonAbility.ability.name;
      
      if(pokemonAbilities.abilities.indexOf(pokemonAbility) !== (pokemonAbilities.abilities.length - 1)){
         abilities.innerText += "/ ";
      }
        
    });
  }

  async showPokemonStats() {
    const pokemonStats = await this.#pokemon.getPokemonInfo();
    const pokemonStatTitle = document.getElementById("statsTitle");
    pokemonStatTitle.innerHTML = "STATS \n"

    let pokemonStatName = document.getElementById("statsText");
    let pokemonStatNumber = document.getElementById("stats");
    
    pokemonStats.stats.forEach((pokemonStat) => {
      pokemonStatName.innerText += pokemonStat.stat.name + ": \n";
      pokemonStatNumber.innerText += pokemonStat.base_stat + "\n";
    });
  }
}
