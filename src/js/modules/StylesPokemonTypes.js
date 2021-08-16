const fire = {
  name: "fire",
  color: "#c04830",
};

const water = {
  name: "water",
  color: "#359afa",
};

const grass = {
  name: "grass",
  color: "#8fd26f",
};

const steel = {
  name: "steel",
  color: "#afa9bc",
};

const bug = {
  name: "bug",
  color: "#acba39",
};

const dragon = {
  name: "dragon",
  color: "#705dc6",
};

const electric = {
  name: "electric",
  color: "#fad67d",
};

const ghost = {
  name: "ghost",
  color: "#66659d",
};

const fairy = {
  name: "fairy",
  color: "#faabfd",
};

const ice = {
  name: "ice",
  color: "#7dddfc",
};

const fighting = {
  name: "fighting",
  color: "#b95943",
};

const normal = {
  name: "normal",
  color: "#d2cbc2",
};

const psychic = {
  name: "psychic",
  color: "#f492b5",
};

const rock = {
  name: "rock",
  color: "#b9ab6e",
};

const dark = {
  name: "dark",
  color: "#6f594b",
};

const ground = {
  name: "ground",
  color: "#d9be56",
};

const poison = {
  name: "poison",
  color: "#8d5682",
};

const flying = {
  name: "flying",
  color: "#6993d9",
};

function comprobatePokemonTypes(pokemonType) {
  console.log(pokemonType);
  for(let i = 0; i<pokemonType.length; i++){
    switch (pokemonType[i].type.name) {
      case fire.name:
        applicateStylesToPokemonType(fire);
        break;
      case water.name:
        applicateStylesToPokemonType(water);
        break;
      case grass.name:
        applicateStylesToPokemonType(grass);
        break;
      case steel.name:
        applicateStylesToPokemonType(steel);
        break;
      case bug.name:
        applicateStylesToPokemonType(bug);
        break;
      case dragon.name:
        applicateStylesToPokemonType(dragon);
        break;
      case electric.name:
        applicateStylesToPokemonType(electric);
        break;
      case ghost.name:
        applicateStylesToPokemonType(ghost);
        break;
      case fairy.name:
        applicateStylesToPokemonType(fairy);
        break;
      case ice.name:
        applicateStylesToPokemonType(ice);
        break;
      case fighting.name:
        applicateStylesToPokemonType(fighting);
        break;
      case normal.name:
        applicateStylesToPokemonType(normal);
        break;
      case psychic.name:
        applicateStylesToPokemonType(psychic);
        break;
      case rock.name:
        applicateStylesToPokemonType(rock);
        break;
      case dark.name:
        applicateStylesToPokemonType(dark);
        break;
      case ground.name:
        applicateStylesToPokemonType(ground);
        break;
      case poison.name:
        applicateStylesToPokemonType(poison);
        break;
      case flying.name:
        applicateStylesToPokemonType(flying);
        break;
    }
  }
  
}
let contador = 0;
function eliminatePrueba(){
    if(contador!== 0){
        eliminateDiv();
    }
    contador++;
}
  
let a = 1;
function eliminateDiv(){
  let eliminate = document.getElementById("body");
  let hola = document.getElementById("prueba1"); 
  let hola2 = document.getElementById("prueba2"); 
  eliminate.removeChild(hola);
  if(hola2 != null){
    eliminate.removeChild(hola2);
  } else {
    a = 1;
  }
  
  
}

function applicateStylesToPokemonType(pokemonType) {
  
  let createHTMLElement = document.createElement("p");
  createHTMLElement.style.backgroundColor = pokemonType.color;
  createHTMLElement.style.display = "flex";
  createHTMLElement.style.width = "60px";
  createHTMLElement.style.height = "30px";
  createHTMLElement.style.justifyContent = "center";
  createHTMLElement.style.alignItems = "center";
  createHTMLElement.style.borderRadius = "10px";
  createHTMLElement.style.border = "1px solid gray";
  createHTMLElement.style.fontFamily = "'Shadows Into Light', cursive";
  createHTMLElement.style.color = "white";
  createHTMLElement.id = "prueba" + a;
  a++;
  if(a >= 3){
    a = 1;
  }
  

  const pContent = document.createTextNode(pokemonType.name.toUpperCase());
  createHTMLElement.appendChild(pContent);
  let pTag = document.getElementById("TypesBox");
  
  document.body.insertBefore(createHTMLElement, pTag);

}

