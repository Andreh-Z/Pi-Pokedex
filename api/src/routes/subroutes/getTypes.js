const { getTypes } = require("../../Controller/getTypes");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tipos = await getTypes();
    res.status(200).send(tipos);
  } catch (error) {
    // manejar el error aquí
    console.error(error);
    res.status(500).send({ error: "Hubo un problema al obtener los tipos" });
  }
});

module.exports = router;
