// Este archivo contiene la configuración del enrutador secundario encargado de obtener todos los pokemon

const express = require("express"); // Importar express
const router = express.Router(); // Crear una instancia del enrutador de express
const { allPokemons } = require("../../Controller/getAllPokemons"); // Importar la función 'allPokemons' del controlador correspondiente

// Establecer una ruta GET en '/'
router.get("/:limit?", async (req, res) => {
  try {
    // Obtener el límite y el nombre del query params
    const limit = req.params.limit || 100; // Establecer un límite por defecto
    const name = req.query.name;

    let getAllPokemon; // Declarar una variable para almacenar el resultado de la llamada a 'allPokemons'

    // Validar que el límite sea un número
    if (!isFinite(limit)) {
      res
        .status(400)
        .send({ message: "El número de página debe ser un número válido" });
      return;
    }

    // Si se proporcionó un nombre, obtener los pokemon con ese nombre
    if (name) {
      getAllPokemon = await allPokemons(limit, name);
      // Si no se encontró ningún pokemon con ese nombre, enviar un mensaje de error
      if (!getAllPokemon) {
        res
          .status(404)
          .send({ message: "No se encontró ningún pokemon con ese nombre" });
        return;
      }
    } else {
      // Si no se proporcionó un nombre, obtener todos los pokemon
      getAllPokemon = await allPokemons(limit);
    }

    // Enviar la respuesta con los pokemon obtenidos
    res.status(200).send(getAllPokemon);
  } catch (error) {
    console.error(error); // Mostrar el error en la consola
    res.status(500).send({ message: "Error al obtener los pokemon" }); // Enviar un mensaje de error
  }
});

module.exports = router; // Exportar el enrutador secundario
