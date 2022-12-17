// Importamos el módulo DataTypes de Sequelize
const { DataTypes } = require("sequelize");

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a Sequelize
module.exports = (sequelize) => {
  // Definimos el modelo
  sequelize.define("pokemon", {
    // Definimos el campo "id" como un UUID
    id: {
      type: DataTypes.UUID,
      // Establecemos el campo "id" como la clave primaria de la tabla
      primaryKey: true,
      // Establecemos un valor por defecto para el campo "id" que genera un UUID aleatorio
      defaultValue: DataTypes.UUIDV4,
    },

    // El tipo de dato UUID se utiliza a menudo para almacenar identificadores únicos en bases de datos. El valor por defecto DataTypes.UUIDV4 genera un UUID aleatorio cada vez que se crea un nuevo registro en la tabla.
    // Creamos una columna llamada "name" de tipo STRING
    // que no puede ser nula
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Creamos una columna llamada "vida" de tipo INTEGER
    // que no puede ser nula
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Creamos una columna llamada "ataque" de tipo INTEGER
    // que no puede ser nula
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Creamos una columna llamada "defensa" de tipo INTEGER
    // que no puede ser nula
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Creamos una columna llamada "velocidad" de tipo INTEGER
    // que no puede ser nula
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Creamos una columna llamada "altura" de tipo INTEGER
    // que no puede ser nula
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Creamos una columna llamada "peso" de tipo INTEGER
    // que no puede ser nula
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Creamos una columna llamada "createOnDataBase" de tipo BOOLEAN
    // que no puede ser nula y su valor por defecto es falso
    createOnDataBase: {
      type: DataTypes.BOOLEAN(false),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
