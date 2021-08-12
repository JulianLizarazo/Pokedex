class PokeAPI{
    #url;
 

    constructor(pokemonName){
        this.#url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
        
    }

    async #searchPokemonData(pokemonUrl){
        const fetchPokemonData = await fetch(pokemonUrl)
        const parsePokemonData = fetchPokemonData.json();
        return parsePokemonData;
    }

    async #initPokemonSearch(pokemonUrl){
        const pokemonInfo = await this.#searchPokemonData(pokemonUrl);
        return pokemonInfo;
    }

    async getPokemonName(){
        const pokemonData = await this.#initPokemonSearch(this.#url);
        console.log(pokemonData)
        const showPokemonName = document.getElementById("pokemonName");
        showPokemonName.innerHTML = pokemonData.name;
        
    }

    async getPokemonId(){
        const pokemonId = await this.#initPokemonSearch(this.#url);
        const showPokemonName = document.getElementById("pokemonName");
        showPokemonName.innerHTML = pokemonId.id;
    }

    async getPokemonSprite(){
        const pokemonSprite = await this.#initPokemonSearch(this.#url);
        window.imagen.setAttribute('src', pokemonSprite.sprites.front_default)
    }

    async getPokemonAbilities(){
        const pokemonAbilites = await this.#initPokemonSearch(this.#url);
    }

    async getPokemonTypes(){
        const pokemonTypes = await this.#initPokemonSearch(this.#url);
        var types = document.getElementById("tipos");
        
        for(let i = 0; i<pokemonTypes.types.length; i++){
            types.innerText +=  pokemonTypes.types[i].type.name + "/ " 
        }

    }
}

const hola = new PokeAPI("blaziken");

hola.getPokemonId();
hola.getPokemonSprite();
hola.getPokemonTypes();






