const express = require("express");
const { Pokemon, Type } = require("../../db");
const router = require("./getPokemon_Id");

// Ruta para crear un nuevo Pokemon
router.post("/", async (req, res) => {
  // Desestructurar el cuerpo de la solicitud para obtener las propiedades del Pokemon
  const {
    name,
    ataque,
    velocidad,
    peso,
    altura,
    defense,
    type,
    creatorsName,
    vida,
    defensa,
    createOnDataBase,
  } = req.body;

  // Imprimir los valores de todos los campos en la consola para fines de depuración
  console.log({
    name,
    ataque,
    velocidad,
    peso,
    altura,
    defensa,
    type,
    creatorsName,
    vida,
    defensa,
    createOnDataBase,
  });

  // Validar que se hayan proporcionado todos los campos requeridos
  if (
    !name ||
    !ataque ||
    !velocidad ||
    !peso ||
    !altura ||
    !defensa ||
    !type ||
    !creatorsName ||
    !vida ||
    !defensa ||
    !createOnDataBase
  ) {
    return res.status(406).send("Por favor, complete todos los campos.");
  }

  try {
    // Crear un nuevo objeto Pokemon en la base de datos
    const newPoke = await Pokemon.create({
      name,
      ataque,
      velocidad,
      peso,
      altura,
      defense,
      type,
      creatorsName,
      vida,
      defensa,
      createOnDataBase,
    });

    // Buscar todos los tipos con el nombre especificado
    let typesDB = await Type.findAll({
      where: { name: "type" },
    });

    // Añadir la asociación entre el Pokemon y los tipes
    newPoke.addTypes(typesDB);

    // Devolver el nuevo objeto Pokemon en la respuesta
    res.json(newPoke);
  } catch (error) {
    // Registrar el mensaje de error y la traza de la pila para fines de depuración
    console.error(error.message);
    console.error(error.stack);
  }
});

module.exports = router;
