export const getAllPokemons = () => {
  return function(dispatch) {
    return fetch(`http://localhost:3001/pokemons/`)
      .then((respuesta) => respuesta.json())
      .then((pokemons) => {
        dispatch({
          type: "GET_ALL_POKEMONS",
          payload: pokemons,
        });
      });
  };
};

export const getTypes = () => {
  return function(dispatch) {
    return fetch(`http://localhost:3001/types`)
      .then((respuesta) => respuesta.json())
      .then((types) => {
        dispatch({
          type: "GET_TYPES",
          payload: types,
        });
      });
  };
};

export const getPokemonName = (name) => {
  return function(dispatch) {
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
      .then((respuesta) => respuesta.json())
      .then((pokemonName) => {
        dispatch({
          type: "GET_POKEMON_BY_NAME",
          payload: pokemonName,
        });
      });
  };
};

export const filterByAttack = (payload) => {
  return {
    type: "FILTER_BY_ATTACK",
    payload: payload,
  };
};
export const filterByDefense = (payload) => {
  return {
    type: "FILTER_BY_DEFENSE",
    payload: payload,
  };
};

export const userMade = (payload) => {
  return {
    type: "FILTER_BY_CREATE",
    payload: payload,
  };
};

export const filterByType = (payload) => {
  return {
    type: "FILTER_BY_TYPE",
    payload: payload,
  };
};

export const pokemonID = (id) => {
  return function(dispatch) {
    return fetch(`http://localhost:3001/pokemon/${id}`)
      .then((respuesta) => respuesta.json())
      .then((pokemonId) => {
        dispatch({
          type: "POKEMON_ID",
          payload: pokemonId,
        });
      });
  };
};

export const createPokemon = (input) => {
  return function() {
    return fetch("http://localhost:3001/pokemon", {
      method: "POST", // Indicamos que se trata de una solicitud POST
      body: JSON.stringify({
        // Convertimos el cuerpo de la solicitud a formato JSON
        input,
      }),
      headers: {
        "Content-Type": "application/json", // Indicamos que el cuerpo de la solicitud es en formato JSON
      },
    })
      .then((res) => res.json()) // Convertimos la respuesta a formato JSON
      .then((data) => console.log(data)) // Mostramos la respuesta en la consola
      .catch((error) => console.error(error)); // Mostramos cualquier error en la consola
  };
};
