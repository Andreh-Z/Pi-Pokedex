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
  if (formData.name) {
    if (!/^[a-zA-Z]+$/.test(formData.name)) {
      errors.name = "El nombre del Pokémon sólo puede contener letras";
    }
  } else {
    // Si no hay nombre de pokemon, marcamos este campo como requerido
    errors.name = "El nombre del Pokémon es requerido";
  }

  // Si existe un valor de ataque, validamos que sea un número y esté dentro del rango especificado
  if (formData.ataque) {
    if (
      !/^\d+$/.test(formData.ataque) ||
      formData.ataque < 10 ||
      formData.ataque > 120
    ) {
      errors.ataque = "El valor de ataque debe ser un número entre 10 y 120";
    }
  } else {
    // Si no hay valor de ataque, marcamos este campo como requerido
    errors.ataque = "El valor de ataque es requerido";
  }

  // Si existe un valor de velocidad, validamos que sea un número y esté dentro del rango especificado
  if (formData.velocidad) {
    if (
      !/^\d+$/.test(formData.velocidad) ||
      formData.velocidad < 200 ||
      formData.velocidad > 450
    ) {
      errors.velocidad = "La velocidad debe ser un número entre 200 y 450";
    }
  } else {
    // Si no hay valor de velocidad, marcamos este campo como requerido
    errors.velocidad = "La velocidad es requerida";
  }

  // Si existe un valor de defensa, validamos que sea un número y esté dentro del rango especificado
  if (formData.defensa) {
    if (
      !/^\d+$/.test(formData.defensa) ||
      formData.defensa < 100 ||
      formData.defensa > 593
    ) {
      errors.defensa = "La defensa debe ser un número entre 100 y 593";
    }
  } else {
    // Si no hay valor de defensa, marcamos este campo como requerido
    errors.defensa = "La defensa es requerida";
  }

  // Si existe un valor de altura, validamos que sea un número y esté dentro del rango especificado
  if (formData.altura) {
    if (
      !/^\d+$/.test(formData.altura) ||
      formData.altura < 3 ||
      formData.altura > 10
    ) {
      errors.altura = "La altura debe ser un número entre 3 y 10";
    }
  } else {
    // Si no hay valor de altura, marcamos este campo como requerido
    errors.altura = "La altura es requerida";
  }

  // Si existe un valor de peso, validamos que sea un número y esté dentro del rango especificado
  if (formData.peso) {
    if (
      !/^\d+$/.test(formData.peso) ||
      formData.peso < 250 ||
      formData.peso > 2500
    ) {
      errors.peso = "El peso debe ser un número entre 250 y 2500";
    }
  } else {
    // Si no hay valor de peso, marcamos este campo como requerido
    errors.peso = "El peso es requerido";
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
