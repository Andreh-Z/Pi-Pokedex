const { Type, Pokemon } = require("../db");
const fetch = require("node-fetch");

// Función que recibe como parámetros un límite de resultados y un nombre de Pokémon
// Si el nombre de Pokémon es "null", devuelve una lista de objetos con la información de cada uno de los Pokémon que se encuentran en la API de Pokémon
// Si el nombre de Pokémon no es "null", devuelve una lista con un único objeto con la información del Pokémon especificado
const pokemonsApi = async (limit, name) => {
  if (!name) {
    // Si no se especificó un nombre de Pokémon, se construye la URL de la API de Pokémon con el límite de resultados especificado
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    // Se hace una petición a la API de Pokémon
    const api = await fetch(url);
    // Se transforma la respuesta de la API a formato JSON
    const x = await api.json();
    // Se obtiene una lista con las URLs de cada uno de los Pokémon que se encuentran en la respuesta de la API
    const arrayResults = x.results;
    const arrayUrls = arrayResults.map((result) => result.url);
    // Se hacen peticiones a cada una de las URLs de los Pokémon
    const pokemonesApi = await Promise.all(arrayUrls.map((url) => fetch(url)));
    // Se transforman las respuestas de las peticiones a formato JSON
    const arrayPokemonsApi = await Promise.all(
      pokemonesApi.map((response) => response.json())
    );

    // Se devuelve una lista con objetos que contienen la información de cada uno de los Pokémon de la API
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
  } else {
    // Si se especificó un nombre de Pokémon, se construye la URL de la API de Pokémon con el nombre del Pokémon
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    // Se hace una petición a la API de Pokémon
    const api = await fetch(url);
    // Se transforma la respuesta de la API a formato JSON
    const x = await api.json();
    // Se devuelve una lista con un único objeto que contiene la información del Pokémon especificado
    return [
      {
        id: x.id,
        name: x.name,
        image: x.sprites.front_default,
        vida: x.stats[0].base_stat,
        ataque: x.stats[1].base_stat,
        defensa: x.stats[2].base_stat,
        velocidad: x.stats[5].base_stat,
        tipo: x.types.map((element) => element.type.name),
        altura: x.height,
        peso: x.weight,
      },
    ];
  }
};

// Función que obtiene la información de todos los Pokémon que se encuentran en la base de datos
const pokeDbInfo = async () => {
  return await Pokemon.findAll({
    // Se incluyen los tipos de cada Pokémon en la consulta a la base de datos
    include: {
      model: Type,
      attribute: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

// Función que recibe como parámetros un límite de resultados y un nombre de Pokémon
// Devuelve una lista de objetos con la información de cada uno de los Pokémon que se encuentran en la API de Pokémon y en la base de datos
const allPokemons = async (limit, name) => {
  let getPokemons;
  if (name) {
    // Si se especificó un nombre de Pokémon, se obtiene la información del Pokémon especificado tanto de la API de Pokémon como de la base de datos
    getPokemons = (await pokemonsApi(limit, name))[0];
  } else {
    // Si no se especificó un nombre de Pokémon, se obtiene la información de todos los Pokémon de la API de Pokémon y de la base de datos
    const pokeApi = await pokemonsApi(limit);
    const pokeDB = await pokeDbInfo();
    // Se concatenan los resultados de la API de Pokémon y de la base de datos
    getPokemons = pokeApi.concat(pokeDB);
  }
  return getPokemons;
};

// Se exportan las funciones para poder ser utilizadas en otras partes del código
module.exports = { allPokemons, pokeDbInfo, pokemonsApi };
