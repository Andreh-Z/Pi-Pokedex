const fetch = require("node-fetch");

const pokemonId = async (id) => {
  // Hacer una solicitud a la API de Pokemon para recuperar un solo Pokemon basado en su ID
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const apiResponse = await fetch(url);
  const pokemonData = await apiResponse.json();

  // Devuelve un objeto con los datos del Pokemon
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
    vida: pokemonData.stats[0].base_stat,
    ataque: pokemonData.stats[1].base_stat,
    defensa: pokemonData.stats[2].base_stat,
    velocidad: pokemonData.stats[5].base_stat,
    tipo: pokemonData.types.map((element) => element.type.name),
    altura: pokemonData.height,
    peso: pokemonData.weight,
  };
};

module.exports = { pokemonId };
