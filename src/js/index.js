const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/';

const busqueda = fetch(url);



/*const conversion = busqueda.then(data => {
  return data.json();
}).then(responseJSON => {
  console.log()
})
.catch(error => {
  console.log(error);
})*/

async function prueba() {
  const hola = await fetch(url)
  const prueba = hola.json();
  return prueba;
}



async function init() {
  const porfavorfunciona = await prueba();
  console.log(porfavorfunciona);
  var text = document.getElementById("texto");

  text.innerText = porfavorfunciona.types[0].type.name
  window.imagen.setAttribute('src', porfavorfunciona.sprites.front_default)
  
}



init();



