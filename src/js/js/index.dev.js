"use strict";

var url = 'https://pokeapi.co/api/v2/pokemon/pikachu/';
var busqueda = fetch(url);
/*const conversion = busqueda.then(data => {
  return data.json();
}).then(responseJSON => {
  console.log()
})
.catch(error => {
  console.log(error);
})*/

function prueba() {
  var hola, prueba;
  return regeneratorRuntime.async(function prueba$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

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

function init() {
  var porfavorfunciona, text;
  return regeneratorRuntime.async(function init$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(prueba());

        case 2:
          porfavorfunciona = _context2.sent;
          console.log(porfavorfunciona);
          text = document.getElementById("texto");
          text.innerText = porfavorfunciona.types[0].type.name;
          window.imagen.setAttribute('src', porfavorfunciona.sprites.front_default);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

init();