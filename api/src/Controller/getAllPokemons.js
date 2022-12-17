const { Type, Pokemon } = require("../db");
const fetch = require("node-fetch");

// Añadimos un parámetro "limit" a la función para poder utilizarlo en la petición HTTP a la API de PokeAPI
const pokemonsApi = async (limit) => {
  // Hacemos una petición HTTP a la API de PokeAPI para obtener información sobre una lista de pokemon
  // Utilizamos el límite especificado para establecer la cantidad de pokemon a obtener
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  // Convertimos la respuesta en formato JSON
  const x = await api.json();

  // Extraemos la lista de resultados de la respuesta
  const arrayResults = x.results;
  // Creamos un array con las urls de cada pokemon de la lista
  const arrayUrls = arrayResults.map((result) => result.url);
  // Hacemos una petición a la API para obtener información sobre todos los pokemon de la lista
  const pokemonesApi = await Promise.all(arrayUrls.map((url) => fetch(url)));
  // Convertimos cada respuesta en formato JSON
  const arrayPokemonsApi = await Promise.all(
    pokemonesApi.map((response) => response.json())
  );
  // Devolvemos la lista de pokemon con su información
  return arrayPokemonsApi.map((e) => ({
    id: e.id,
    name: e.name,
    image: e.sprites.front_default,
    vida: e.stats[0].base_stat,
    ataque: e.stats[1].base_stat,
    defensa: e.stats[2].base_stat,
    velocidad: e.stats[5].base_stat,
    tipo: e.types.map((element) => element.type.name),
    altura: e.height,
    peso: e.weight,
  }));
};

const pokeDbInfo = async () => {
  // Utilizamos el modelo de Pokemon de la base de datos para obtener toda la información de los pokemon almacenados en la base de datos, incluyendo los tipos de cada pokemon
  return await Pokemon.findAll({
    include: {
      model: Type,
      attribute: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const allPokemons = async (limit) => {
  // Obtenemos la información de los pokemon de la API y de la base de datos
  const pokeApi = await pokemonsApi(limit);
  const pokeDB = await pokeDbInfo();
  // Concatenamos los dos arrays de pokemon
  const getPokemons = pokeApi.concat(pokeDB);
  // Devolvemos la lista combinada de todos los pokemon
  return getPokemons;
};

// Exportamos las tres funciones para que puedan ser utilizadas en otros módulos
module.exports = { allPokemons, pokeDbInfo, pokemonsApi };
