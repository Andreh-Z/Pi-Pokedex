// Este archivo contiene la configuración del enrutador principal de la aplicación

const { Router } = require("express"); // Importar el enrutador de express
const router = Router(); // Crear una instancia del enrutador

// Importar todos los enrutadores secundarios;
// Ejemplo: const authRouter = require('./auth.js');

const get_Pokemons_name_limit = require("./subroutes/getPokemon_name_limit"); // Enrutador para obtener los nombres de los pokemon con un límite
const get_Pokemon_id = require("./subroutes/getPokemon_Id"); // Enrutador para obtener el pokemon por su id
const get_Pokemon_type = require("./subroutes/getTypes"); // Enrutador para obtener los tipos de pokemon

router.use("/pokemons", get_Pokemons_name_limit); // Usar el enrutador de obtener nombres de pokemon con un límite en la ruta '/pokemons'
router.use("/pokemon", get_Pokemon_id); // Usar el enrutador de obtener pokemon por id en la ruta '/pokemon'
router.use("/types", get_Pokemon_type); // Usar el enrutador de obtener tipos de pokemon en la ruta '/types'

module.exports = router; // Exportar el enrutador principal
