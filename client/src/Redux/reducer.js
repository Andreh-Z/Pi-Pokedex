// Estado inicial del reductor
const initialState = {
  allPokemons: [], // Lista de todos los pokemones disponibles
  types: [], // Lista de todos los tipos de pokemon
  copyAllPokemons: [], // Copia de la lista de todos los pokemones disponibles
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
        copyAllPokemons: action.payload,
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

    case "FILTER_BY_ATTACK": {
      // Declara una variable local llamada "allPokemons" que se inicializa con el valor de la propiedad "copyAllPokemons" del objeto de estado.
      // Esta variable representa una copia del array original que se utilizará para realizar el sorting sin modificar el array original.
      const allPokemons = state.copyAllPokemons;

      // Comprueba si "action.payload" tiene el valor "All". Si es así, devuelve el objeto de estado con el array "allPokemons" ordenado por la propiedad "id" de menor a mayor.
      if (action.payload === "All") {
        return {
          ...state,
          allPokemons: allPokemons.sort((a, b) => a.id - b.id),
        };
      }
      // Si "action.payload" no tiene el valor "All", comprueba si tiene el valor "Desc". Si es así, devuelve el objeto de estado con el array "allPokemons" ordenado por la propiedad "ataque" de menor a mayor.
      else if (action.payload === "Desc") {
        return {
          ...state,
          allPokemons: allPokemons.sort((a, b) => a.ataque - b.ataque),
        };
      }
      // Si "action.payload" no tiene el valor "All" ni "Desc", se asume que tiene el valor "Asc". En ese caso, devuelve el objeto de estado con el array "allPokemons" ordenado por la propiedad "ataque" de mayor a menor.
      else {
        return {
          ...state,
          allPokemons: allPokemons.sort((a, b) => b.ataque - a.ataque),
        };
      }
    }
    case "FILTER_BY_DEFENSE": {
      const allPokemons = state.copyAllPokemons;
      if (action.payload === "All") {
        return {
          ...state,
          allPokemons: allPokemons.sort((a, b) => a.id - b.id),
        };
      } else if (action.payload === "Desc") {
        return {
          ...state,
          allPokemons: allPokemons.sort((a, b) => a.defensa - b.defensa),
        };
      } else {
        return {
          ...state,
          allPokemons: allPokemons.sort((a, b) => b.defensa - a.defensa),
        };
      }
    }
    case "FILTER_BY_TYPE": {
      // Filtrar la lista de todos los Pokémon por el tipo especificado en el payload de la acción
      const filter = state.allPokemons.filter((element) =>
        element.tipo.includes(action.payload)
      );

      // Devolver un nuevo objeto de estado con todas las propiedades del estado original,
      // pero con la lista de todos los Pokémon reemplazada por la lista filtrada
      return {
        ...state,
        allPokemons: filter,
      };
    }

    case "FILTER_BY_CREATE": {
      const filtrado = state.allPokemons.filter((element) => {
        element.createOnDataBase.includes(action.payload);
      });
      return {
        ...state,
        allPokemons: filtrado,
      };
    }

    // Caso por defecto, devuelve el estado actual
    default:
      return state;
  }
};

// Exporta la función reductora principal
export default rootReducer;
