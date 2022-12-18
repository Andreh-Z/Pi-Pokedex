const { Type, Pokemon } = require("../db");
const fetch = require("node-fetch");

const pokemonsApi = async (limit, name) => {
  if (!name) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const api = await fetch(url);
    const x = await api.json();
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
  } else {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const api = await fetch(url);
    const x = await api.json();
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

const allPokemons = async (limit, name) => {
  let getPokemons;
  if (name) {
    getPokemons = (await pokemonsApi(limit, name))[0];
  } else {
    const pokeApi = await pokemonsApi(limit);
    const pokeDB = await pokeDbInfo();
    getPokemons = pokeApi.concat(pokeDB);
  }
  return getPokemons;
};

module.exports = { allPokemons, pokeDbInfo, pokemonsApi };
