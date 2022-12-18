const express = require("express");
const router = express.Router();

// Importar la función `allPokemons` del módulo `getAllPokemons`
const { allPokemons } = require("../Controller/getAllPokemons");

// Definir una ruta GET para obtener todos los pokemons
router.get("/pokemons/:limit?", async (req, res) => {
  try {
    // Obtener el número de página de la solicitud o establecer el límite por defecto en 100
    const limit = req.params.limit || 100;
    // Obtener el nombre de búsqueda de la solicitud
    const name = req.query.name;
    let getAllPokemon;

    // Verificar si el número de página es válido
    if (!isFinite(limit)) {
      // Enviar un mensaje de error si el número de página no es válido
      res
        .status(400)
        .send({ message: "El número de página debe ser un número válido" });
      // Detener la ejecución de la ruta
      return;
    }

    // Si se proporcionó un nombre como parámetro de búsqueda, buscar pokemons por nombre
    if (name) {
      getAllPokemon = await allPokemons(limit, name);
      // Si no se encontró ningún pokemon con ese nombre, enviar un mensaje de error
      if (!getAllPokemon) {
        res
          .status(404)
          .send({ message: "No se encontró ningún pokemon con ese nombre" });
        // Detener la ejecución de la ruta
        return;
      }
    } else {
      // Si no se proporcionó nombre como parámetro de búsqueda, obtener todos los pokemons
      getAllPokemon = await allPokemons(limit);
    }
    // Enviar el resultado de la búsqueda como respuesta
    res.status(200).send(getAllPokemon);
  } catch (error) {
    // Imprimir cualquier error en la consola
    console.error(error);
    // Enviar un mensaje de error genérico al usuario
    res.status(500).send({ message: "Error al obtener los pokemon" });
  }
});

// Exportar el router para que pueda ser utilizado en otros módulos
module.exports = router;
