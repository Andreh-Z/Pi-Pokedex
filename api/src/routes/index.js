const express = require("express");
const router = express.Router();

const { allPokemons } = require("../Controller/getAllPokemons");
const { pokemonId } = require("../Controller/pokemonId");

router.get("/pokemons/:limit?", async (req, res) => {
  try {
    const limit = req.params.limit || 100;
    const name = req.query.name;
    let getAllPokemon;

    if (!isFinite(limit)) {
      res
        .status(400)
        .send({ message: "El número de página debe ser un número válido" });
      return;
    }

    if (name) {
      getAllPokemon = await allPokemons(limit, name);
      if (!getAllPokemon) {
        res
          .status(404)
          .send({ message: "No se encontró ningún pokemon con ese nombre" });
        return;
      }
    } else {
      getAllPokemon = await allPokemons(limit);
    }
    res.status(200).send(getAllPokemon);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener los pokemon" });
  }
});

router.get("/pokemon/:id", async (req, res) => {
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
