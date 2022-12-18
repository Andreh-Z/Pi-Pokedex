const { pokemonId } = require("../../Controller/pokemonId");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!isFinite(id)) {
      res.status(400).send({ message: "El id debe ser un número válido" });
      return;
    }

    const pokemon = await pokemonId(id);
    if (!pokemon) {
      res
        .status(404)
        .send({ message: "No se encontró ningún pokemon con ese id" });
      return;
    }
    res.status(200).send(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener el pokemon" });
  }
});
module.exports = router;
