// Esta función valida los datos del formulario
function validateForm(formData) {
  // Creamos un objeto de errores vacío
  const errors = {};

  // Si existe un nombre de creador, validamos que sólo contenga letras
  if (formData.creatorsName) {
    if (!/^[a-zA-Z]+$/.test(formData.creatorsName)) {
      errors.creatorsName = "El nombre del creador sólo puede contener letras";
    }
  } else {
    // Si no hay nombre de creador, marcamos este campo como requerido
    errors.creatorsName = "El nombre del creador es requerido";
  }

  // Si existe un nombre de pokemon, validamos que sólo contenga letras
  if (formData.pokemonName) {
    if (!/^[a-zA-Z]+$/.test(formData.pokemonName)) {
      errors.pokemonName = "El nombre del Pokémon sólo puede contener letras";
    }
  } else {
    // Si no hay nombre de pokemon, marcamos este campo como requerido
    errors.pokemonName = "El nombre del Pokémon es requerido";
  }

  // Si existe un valor de ataque, validamos que sea un número y esté dentro del rango especificado
  if (formData.attack) {
    if (
      !/^\d+$/.test(formData.attack) ||
      formData.attack < 10 ||
      formData.attack > 120
    ) {
      errors.attack = "El valor de ataque debe ser un número entre 10 y 120";
    }
  } else {
    // Si no hay valor de ataque, marcamos este campo como requerido
    errors.attack = "El valor de ataque es requerido";
  }

  // Si existe un valor de velocidad, validamos que sea un número y esté dentro del rango especificado
  if (formData.speed) {
    if (
      !/^\d+$/.test(formData.speed) ||
      formData.speed < 200 ||
      formData.speed > 450
    ) {
      errors.speed = "La velocidad debe ser un número entre 200 y 450";
    }
  } else {
    // Si no hay valor de velocidad, marcamos este campo como requerido
    errors.speed = "La velocidad es requerida";
  }

  // Si existe un valor de defensa, validamos que sea un número y esté dentro del rango especificado
  if (formData.defense) {
    if (
      !/^\d+$/.test(formData.defense) ||
      formData.defense < 100 ||
      formData.defense > 593
    ) {
      errors.defense = "La defensa debe ser un número entre 100 y 593";
    }
  } else {
    // Si no hay valor de defensa, marcamos este campo como requerido
    errors.defense = "La defensa es requerida";
  }

  // Si existe un valor de altura, validamos que sea un número y esté dentro del rango especificado
  if (formData.height) {
    if (
      !/^\d+$/.test(formData.height) ||
      formData.height < 3 ||
      formData.height > 10
    ) {
      errors.height = "La altura debe ser un número entre 3 y 10";
    }
  } else {
    // Si no hay valor de altura, marcamos este campo como requerido
    errors.height = "La altura es requerida";
  }

  // Si existe un valor de peso, validamos que sea un número y esté dentro del rango especificado
  if (formData.weight) {
    if (
      !/^\d+$/.test(formData.weight) ||
      formData.weight < 250 ||
      formData.weight > 2500
    ) {
      errors.weight = "El peso debe ser un número entre 250 y 2500";
    }
  } else {
    // Si no hay valor de peso, marcamos este campo como requerido
    errors.weight = "El peso es requerido";
  }

  // Si no hay foto de pokemon, marcamos este campo como requerido
  if (!formData.photo) {
    errors.photo = "La foto del Pokémon es requerida";
  }

  // Si no se ha seleccionado al menos una opción, marcamos este campo como requerido
  if (!formData.select) {
    errors.select = "Por favor, selecciona al menos una opción";
  }

  // Si hay errores, devolvemos el objeto de errores. De lo contrario, devolvemos un objeto vacío
  return Object.keys(errors).length > 0 ? errors : {};
}

// Exportamos la función para poder usarla en otras partes de la aplicación
export default validateForm;
