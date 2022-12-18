const { Router } = require("express");
const { allPokemons } = require("../Controller/getAllPokemons");

const router = Router();

// Maneja peticiones HTTP GET a la ruta "/pokemons/:limit?"
// La propiedad "limit" es opcional y se utiliza para establecer el límite de pokemon a obtener
// Si no se especifica un límite, se utiliza el valor por defecto de 100
router.get("/pokemons/:limit?", async (req, res) => {
  try {
    // Obtenemos el límite especificado por el cliente o utilizamos el valor por defecto de 100
    const limit = req.params.limit || 100;
    // Obtenemos el valor del query "name", si existe
    const name = req.query.name;

    // Si se especificó un valor para "name", utilizamos la función allPokemons para obtener la lista de pokemon que coinciden con ese nombre
    // De lo contrario, utilizamos la función allPokemons para obtener la lista de todos los pokemon
    let getAllPokemon;
    if (name) {
      getAllPokemon = await allPokemons(limit, name);
    } else {
      getAllPokemon = await allPokemons(limit);
    }

    // Enviamos la lista de pokemon al cliente en la respuesta
    res.status(200).send(getAllPokemon);
  } catch (error) {
    // Si ocurre algún error, imprimimos el error en la consola y enviamos una respuesta de error al cliente
    console.error(error);
    res.status(500).send({ message: "Error al obtener los pokemon" });
  }
});

module.exports = router;
