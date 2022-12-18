const { Type, Pokemon } = require("../db");
const fetch = require("node-fetch");

// Esta función hace una solicitud a la API de Pokemon para recuperar una lista de Pokemon o un solo Pokemon
// basado en el parámetro name. Si no se proporciona nombre, recuperará una lista de Pokemon basados en el límite.
const pokemonsApi = async (limit, name) => {
  if (!name) {
    // Si no se proporciona nombre, hacer una solicitud a la API para recuperar una lista de Pokemon basados en el límite
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const api = await fetch(url);
    const x = await api.json();
    const arrayResults = x.results;
    const arrayUrls = arrayResults.map((result) => result.url);
    const pokemonesApi = await Promise.all(arrayUrls.map((url) => fetch(url)));
    const arrayPokemonsApi = await Promise.all(
      pokemonesApi.map((response) => response.json())
    );
    // Devuelve un array de objetos con los datos de Pokemon
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
    // Si se proporciona nombre, hacer una solicitud a la API para recuperar un solo Pokemon basado en el nombre
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const api = await fetch(url);
    const x = await api.json();
    // Devuelve un array con un único objeto que contiene los datos de Pokemon
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

// Esta función recupera todos los datos de Pokemon de la base de datos
const pokeDbInfo = async () => {
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

// Esta función recupera todos los datos de Pokemon ya sea de la API o de la base de datos,
// dependiendo de si se proporcionó un nombre o no.
const allPokemons = async (limit, name) => {
  let getPokemons;
  if (name) {
    // Si se proporcionó un nombre, recuperar solo los datos para ese Pokemon específico de la API
    // Modificar esta línea para devolver solo el primer elemento de la lista, que sería el Pokemon que se está buscando
    getPokemons = (await pokemonsApi(limit, name))[0];
  } else {
    // Si no se proporcionó nombre, recuperar todos los datos de Pokemon tanto de la API como de la base de datos
    const pokeApi = await pokemonsApi(limit);
    const pokeDB = await pokeDbInfo();
    getPokemons = pokeApi.concat(pokeDB);
  }
  return getPokemons;
};

module.exports = { allPokemons, pokeDbInfo, pokemonsApi };
