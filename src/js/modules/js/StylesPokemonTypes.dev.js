"use strict";

var fire = {
  name: "fire",
  color: "#c04830"
};
var water = {
  name: "water",
  color: "#359afa"
};
var grass = {
  name: "grass",
  color: "#8fd26f"
};
var steel = {
  name: "steel",
  color: "#afa9bc"
};
var bug = {
  name: "bug",
  color: "#acba39"
};
var dragon = {
  name: "dragon",
  color: "#705dc6"
};
var electric = {
  name: "electric",
  color: "#fad67d"
};
var ghost = {
  name: "ghost",
  color: "#66659d"
};
var fairy = {
  name: "fairy",
  color: "#faabfd"
};
var ice = {
  name: "ice",
  color: "#7dddfc"
};
var fighting = {
  name: "fighting",
  color: "#b95943"
};
var normal = {
  name: "normal",
  color: "#d2cbc2"
};
var psychic = {
  name: "psychic",
  color: "#f492b5"
};
var rock = {
  name: "rock",
  color: "#b9ab6e"
};
var dark = {
  name: "dark",
  color: "#6f594b"
};
var ground = {
  name: "ground",
  color: "#d9be56"
};
var poison = {
  name: "poison",
  color: "#8d5682"
};
var flying = {
  name: "flying",
  color: "#6993d9"
};

function applicatePositionToAUniqueType(pokemonType) {
  if (pokemonType.length == 1) {
    var prueba = document.getElementById("typesBox");
    prueba.style.justifyContent = "flex-end";
  }
}

function comprobatePokemonTypes(pokemonType) {
  console.log(pokemonType);
  applicatePositionToAUniqueType(pokemonType);

  for (var i = 0; i < pokemonType.length; i++) {
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

var countNumberOfPokemonTypes = 1;

function eliminatePokemonTypes() {
  var eliminate = document.getElementById("typesBox");
  var typeOfPokemon1 = document.getElementById("typeOfPokemon1");
  var typeOfPokemon2 = document.getElementById("typeOfPokemon2");

  if (typeOfPokemon1 != null) {
    eliminate.removeChild(typeOfPokemon1);
  }

  if (typeOfPokemon2 != null) {
    eliminate.removeChild(typeOfPokemon2);
  } else {
    countNumberOfPokemonTypes = 1;
  }
}

var pokemonInfoFontFamily = "'Shadows Into Light', cursive";

function applicateStylesToPokemonType(pokemonType) {
  var createHTMLElement = document.createElement("p");
  createHTMLElement.style.backgroundColor = pokemonType.color;
  createHTMLElement.style.display = "flex";
  createHTMLElement.style.flexDirection = "row";
  createHTMLElement.style.width = "80px";
  createHTMLElement.style.height = "35px";
  createHTMLElement.style.justifyContent = "center";
  createHTMLElement.style.alignItems = "center";
  createHTMLElement.style.borderRadius = "10px";
  createHTMLElement.style.border = "1px solid gray";
  createHTMLElement.style.fontFamily = pokemonInfoFontFamily;
  createHTMLElement.style.color = "white";
  createHTMLElement.id = "typeOfPokemon" + countNumberOfPokemonTypes;
  countNumberOfPokemonTypes++;

  if (countNumberOfPokemonTypes >= 3) {
    countNumberOfPokemonTypes = 1;
  }

  var pTagContent = document.createTextNode(pokemonType.name.toUpperCase());
  createHTMLElement.appendChild(pTagContent);
  var pTagToConcatenate = document.getElementById("typesBox");
  pTagToConcatenate.appendChild(createHTMLElement);
}