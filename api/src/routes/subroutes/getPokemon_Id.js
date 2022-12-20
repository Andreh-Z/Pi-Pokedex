const { pokemonId } = require("../../Controller/pokemonId"); // Importa la función 'pokemonId' desde el módulo '../../Controller/pokemonId'
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  // Define una ruta GET en la ruta '/:id'
  try {
    const id = req.params.id; // Obtiene el id del pokemon de los parámetros de la ruta

    if (!isFinite(id)) {
      // Verifica si el id es un número válido
      // Si el id no es válido, envía una respuesta de error al cliente
      res.status(400).send({ message: "El id debe ser un número válido" });
      return;
    }

    const pokemon = await pokemonId(id); // Obtiene el pokemon con el id especificado
    if (!pokemon) {
      // Si no se encontró ningún pokemon con el id especificado, envía una respuesta de error al cliente
      res
        .status(404)
        .send({ message: "No se encontró ningún pokemon con ese id" });
      return;
    }
    // Si se encontró el pokemon, envía una respuesta al cliente con la información del pokemon
    res.status(200).send(pokemon);
  } catch (error) {
    // Si ocurre algún error durante el proceso, se maneja en este bloque catch
    console.error(error);
    // Envía una respuesta de error al cliente
    res.status(500).send({ message: "Error al obtener el pokemon" });
  }
});
module.exports = router; // Exporta la instancia de Router de Express
