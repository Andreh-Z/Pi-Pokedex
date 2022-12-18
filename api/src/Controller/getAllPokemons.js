const { Type, Pokemon } = require("../db");
const fetch = require("node-fetch");

// Añadimos un parámetro "limit" a la función para poder utilizarlo en la petición HTTP a la API de PokeAPI
const pokemonsApi = async (limit, name) => {
  // Creamos una variable para almacenar la url de la petición a la API
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  // Si se especificó un valor para "name", añadimos el query "name" a la url de la petición
  if (name) {
    url += `&name=${name}`;
  }

  // Hacemos una petición HTTP a la API de PokeAPI utilizando la url que acabamos de crear
  const api = await fetch(url);
  // Convertimos la respuesta en formato JSON
  const x = await api.json();

  // El resto del código se mantiene igual, con la excepción de que ahora la lista de resultados podría ser más pequeña o incluso estar vacía si se especificó un valor para "name" y no se encontró ningún pokemon con ese nombre
  const arrayResults = x.results;
  const arrayUrls = arrayResults.map((result) => result.url);
  const pokemonesApi = await Promise.all(arrayUrls.map((url) => fetch(url)));
  const arrayPokemonsApi = await Promise.all(
    pokemonesApi.map((response) => response.json())
  );
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
