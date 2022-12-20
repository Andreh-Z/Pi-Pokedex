function validateForm(formData) {
  // Objeto para almacenar cualquier error que se encuentre
  let errors = {};

  // Compruebe que el campo pokeName esté llenado y solo contenga letras
  if (!formData.pokeName || !/^[a-zA-Z]+$/.test(formData.pokeName)) {
    errors.pokeName =
      "El campo 'pokeName' es obligatorio y solo puede contener letras";
  }

  // Función de validación para campos que deben contener un número entre 1 y un valor máximo determinado
  function validateNumberField(value, max) {
    // Compruebe que el campo esté llenado
    if (!value) {
      return "Este campo es obligatorio";
    }
    // Compruebe que el campo no contenga espacios
    if (/\s/.test(value)) {
      return "Este campo no puede contener espacios";
    }
    // Compruebe que el campo solo contenga números
    if (!/^\d+$/.test(value)) {
      return "Este campo solo puede contener números";
    }
    // Compruebe que el número esté entre 1 y el valor máximo determinado
    if (parseInt(value) > max) {
      return `Este campo debe ser un número entre 1 y ${max}`;
    }
    // Si no se encuentran errores, devuelva una cadena vacía
    return "";
  }

  // Compruebe el campo attackValue
  const attackError = validateNumberField(formData.attackValue, 50);
  if (attackError) {
    errors.attackValue = attackError;
  }

  // Compruebe el campo defenseValue
  const defenseError = validateNumberField(formData.defenseValue, 50);
  if (defenseError) {
    errors.defenseValue = defenseError;
  }

  // Compruebe el campo speed
  const speedError = validateNumberField(formData.speed, 100);
  if (speedError) {
    errors.speed = speedError;
  }

  // Compruebe que el campo types esté llenado y solo contenga una lista de letras separadas por comas
  if (!formData.types || !/^[a-zA-Z]+(,[a-zA-Z]+)*$/.test(formData.types)) {
    errors.types =
      "El campo 'Types' es obligatorio y debes seleccionar al menos una opción";
  }
  // Compruebe que la checkbox "flexCheck" ha sido marcada
  if (!formData.flexCheck) {
    errors.flexCheck = "Debes marcar esta casilla para continuar";
  }

  // Devuelva el objeto de errores
  return errors;
}

export default validateForm;
