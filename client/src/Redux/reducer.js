// Estado inicial del reductor
const initialState = {
  allPokemons: [], // Lista de todos los pokemones disponibles
  types: [], // Lista de todos los tipos de pokemon
};

// Función reductora principal
const rootReducer = (state = initialState, action) => {
  // Declaración switch para manejar diferentes acciones
  switch (action.type) {
    // Caso para la acción "GET_ALL_POKEMONS"
    case "GET_ALL_POKEMONS": {
      // Devuelve un nuevo objeto de estado con la lista actualizada de todos los pokemones
      return {
        ...state,
        allPokemons: action.payload,
      };
    }
    // Caso para la acción "GET_TYPES"
    case "GET_TYPES": {
      // Devuelve un nuevo objeto de estado con la lista actualizada de los tipos de pokemon
      return {
        ...state,
        types: action.payload,
      };
    }
    case "GET_POKEMON_BY_NAME": {
      return {
        ...state,
        allPokemons: action.payload,
      };
    }
    // Caso por defecto, devuelve el estado actual
    default:
      return state;
  }
};

// Exporta la función reductora principal
export default rootReducer;
