"use strict";

var pikachu = 'https://pokeapi.co/api/v2/pokemon/grookey/';
var url = 'https://pokeapi.co/api/v2/pokemon/';
var ingreso = "";
var pito = "";

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
  var porfavorfunciona;
  return regeneratorRuntime.async(function init$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(prueba(pito));

        case 2:
          porfavorfunciona = _context2.sent;
          console.log(porfavorfunciona);
          window.imagen.setAttribute('src', porfavorfunciona.sprites.front_default);
          console.log(hola);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var busqueda = fetch(url);