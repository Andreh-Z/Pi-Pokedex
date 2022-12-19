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
