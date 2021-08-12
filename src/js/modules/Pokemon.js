import PokeAPI from "./PokeAPI.mjs";

class Pokemon{
    #pokemon

    constructor(pokemonNameOrId = "cyndaquil"){
        this.#pokemon = new PokeAPI(pokemonNameOrId);
    }

    async showPokemonName(){
        const pokemonName = await this.#pokemon.getPokemonName();
        const showPokemonName = document.getElementById("pokemonName");
        showPokemonName.innerHTML = pokemonName.name;
    }

    async showPokemonSprite(){
        const pokemonSprite = await this.#pokemon.getPokemonSprite();
        window.imagen.setAttribute("src", pokemonSprite.sprites.front_default);
    }
}

const prueba = new Pokemon();

prueba.showPokemonName();
prueba.showPokemonSprite();