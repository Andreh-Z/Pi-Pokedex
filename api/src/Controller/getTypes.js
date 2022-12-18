const { Type } = require("../db");
const fetch = require("node-fetch");

// Esta función obtiene la lista de tipos de la PokeAPI
// y los almacena en la base de datos
const getTypes = async () => {
  // URL para el endpoint de tipos de PokeAPI
  const url = "https://pokeapi.co/api/v2/type";

  // Realiza una solicitud GET a la API
  const api = await fetch(url);

  // Parsea la respuesta como JSON
  const { results } = await api.json();

  // Extrae los nombres de los tipos del array results
  const names = results.map(({ name }) => name);

  // Creamos un array de objetos con los tipos a insertar
  const typesToInsert = names.map((name) => ({ name }));

  // Usamos la función bulkCreate para insertar los tipos en la base de datos
  return Type.bulkCreate(typesToInsert, { ignoreDuplicates: true }).then(
    () => names
  );
};

module.exports = { getTypes };
