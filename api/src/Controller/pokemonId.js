// Importamos la dependencia 'node-fetch' para hacer solicitudes HTTP
const fetch = require("node-fetch");

// Creamos la función 'pokemonId' que recibe un ID de Pokemon como parámetro
const pokemonId = async (id) => {
  // Construimos la URL para hacer la solicitud a la API de Pokemon
  // utilizando el ID del Pokemon que se recibió como parámetro
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Hacemos una solicitud GET a la URL construida
  const apiResponse = await fetch(url);

  // Parseamos la respuesta de la API como JSON
  const pokemonData = await apiResponse.json();

  // Devolvemos un objeto con los datos del Pokemon
  return {
    id: pokemonData.id, // ID del Pokemon
    name: pokemonData.name, // Nombre del Pokemon
    image: pokemonData.sprites.front_default, // Imagen del Pokemon
    vida: pokemonData.stats[0].base_stat, // PV del Pokemon
    ataque: pokemonData.stats[1].base_stat, // Ataque del Pokemon
    defensa: pokemonData.stats[2].base_stat, // Defensa del Pokemon
    velocidad: pokemonData.stats[5].base_stat, // Velocidad del Pokemon
    tipo: pokemonData.types.map((element) => element.type.name), // Tipo(s) del Pokemon
    altura: pokemonData.height, // Altura del Pokemon
    peso: pokemonData.weight, // Peso del Pokemon
  };
};

// Exportamos la función 'pokemonId' para que pueda ser utilizada en otros módulos
module.exports = { pokemonId };
