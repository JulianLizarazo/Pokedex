"use strict";

var pikachu = 'https://pokeapi.co/api/v2/pokemon/grookey/';
var url = 'https://pokeapi.co/api/v2/pokemon/';
var ingreso = "";
var pito = "";
comprobacion();

function perra() {
  ingreso = document.getElementById("ingreso").value;
  console.log(ingreso);
  pito = "".concat(url).concat(ingreso, "/");
  console.log(pito);
  init(pito);
}

function prueba(link) {
  var hola, prueba;
  return regeneratorRuntime.async(function prueba$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(link));

        case 2:
          hola = _context.sent;
          prueba = hola.json();
          return _context.abrupt("return", prueba);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function init(pito) {
  var porfavorfunciona, prueba45, types, i, _i;

  return regeneratorRuntime.async(function init$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(prueba(pito));

        case 2:
          porfavorfunciona = _context2.sent;
          console.log(porfavorfunciona);
          prueba45 = JSON.stringify(porfavorfunciona);
          types = document.getElementById("tipos"); //tipos

          for (i = 0; i < porfavorfunciona.types.length; i++) {
            types.innerText += porfavorfunciona.types[i].type.name + "/ ";
          } //Stats


          console.group("Stats");
          console.log(porfavorfunciona.stats[0].base_stat);
          console.groupEnd();

          for (_i = 0; _i < porfavorfunciona.stats.length; _i++) {
            text.innerText += porfavorfunciona.stats[_i].stat.name + ": " + porfavorfunciona.stats[_i].base_stat + ", ";
          }

          window.imagen.setAttribute('src', porfavorfunciona.sprites.front_default);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function comprobacion() {
  var foto = document.getElementById("body");
  var tiempo = new Date();
  console.log(tiempo.getHours());

  if (tiempo.getHours() < 18) {
    foto.setAttribute("style", 'background-image: url("/Pokedex/assets/imgDay.jpg"); background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;');
  } else {
    foto.setAttribute("style", "background-image: url('/Pokedex/assets/imgNight.jpg'); background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;");
  }
}

var busqueda = fetch(url);