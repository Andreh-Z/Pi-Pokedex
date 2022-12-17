// Importamos el módulo DataTypes de Sequelize
const { DataTypes } = require("sequelize");

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a Sequelize
module.exports = (sequelize) => {
  // Definimos el modelo
  sequelize.define("type", {
    // Creamos una columna llamada "id" de tipo INTEGER
    // que es la clave primaria y tiene habilitado el autoincremento
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Creamos una columna llamada "name" de tipo STRING
    // que no puede ser nula
    name: { type: DataTypes.STRING, allowNull: false },
  });
};
