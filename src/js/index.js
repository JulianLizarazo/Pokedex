const pikachu = 'https://pokeapi.co/api/v2/pokemon/grookey/'
let url = 'https://pokeapi.co/api/v2/pokemon/';
var ingreso = ""
var pito = ""


comprobacion();

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
  const prueba45 = JSON.stringify(porfavorfunciona)
  var text = document.getElementById("texto");
  var types = document.getElementById("tipos");
  //tipos
  for(let i = 0; i<porfavorfunciona.types.length; i++){
    text.innerText +=  porfavorfunciona.types[i].type.name + "/ " 
  }

  //Stats
  console.group("Stats")
  console.log(porfavorfunciona.stats[0].base_stat)
  console.groupEnd();
  for(let i = 0; i<porfavorfunciona.stats.length; i++){
    text.innerText +=  porfavorfunciona.stats[i].stat.name + ": " + porfavorfunciona.stats[i].base_stat + ", "
  }
  
  window.imagen.setAttribute('src', porfavorfunciona.sprites.front_default)
 
}


function comprobacion(){
  var foto = document.getElementById("body");
  var tiempo = new Date();
  console.log(parseInt(tiempo.getHours))
  if(tiempo.getHours < 18){
    foto.setAttribute("style", 'background-image: url("/Pokedex/assets/imgDay.jpg")')
  }else{
    foto.setAttribute("style", "background-image: url('/Pokedex/assets/imgNight.jpg'); background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;")
  }
}



const busqueda = fetch(url);









