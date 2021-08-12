const pikachu = 'https://pokeapi.co/api/v2/pokemon/grookey/'
let url = 'https://pokeapi.co/api/v2/pokemon/';
var ingreso = ""
var pito = ""




function perra(){
  ingreso = document.getElementById("ingreso").value
  console.log(ingreso)
  pito = `${url}${ingreso}/`
  console.log(pito)
  init(pito);
}



async function prueba(link) {
  const hola = await fetch(link)
  const prueba = hola.json();
  return prueba;
}



async function init(pito) {
  const porfavorfunciona = await prueba(pito);
  console.log(porfavorfunciona);
  
  window.imagen.setAttribute('src', porfavorfunciona.sprites.front_default)
  console.log(hola)
}






const busqueda = fetch(url);









