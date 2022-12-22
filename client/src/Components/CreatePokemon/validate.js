function validateForm(formData) {
  const errors = {};

  // Validate Types
  if (!formData.Types || formData.Types.length === 0) {
    errors.Types = "You must select at least one option";
  }

  // Validate Speed
  if (
    !formData.Speed ||
    !/^\d+$/.test(formData.Speed) ||
    formData.Speed < 1 ||
    formData.Speed > 150
  ) {
    errors.Speed = "You must enter an integer between 1 and 150";
  }

  // Validate Attack
  if (
    !formData.Attack ||
    !/^\d+$/.test(formData.Attack) ||
    formData.Attack < 1 ||
    formData.Attack > 200
  ) {
    errors.Attack = "You must enter an integer between 1 and 200";
  }

  // Validate Defense
  if (
    !formData.Defense ||
    !/^\d+$/.test(formData.Defense) ||
    formData.Defense < 1 ||
    formData.Defense > 350
  ) {
    errors.Defense = "You must enter an integer between 1 and 350";
  }

  // Validate Picture
  if (!formData.Picture || !(formData.Picture instanceof File)) {
    errors.Picture = "You must upload a photo";
  }

  // Validate CreatorsName
  if (!formData.CreatorsName || !/^[a-zA-Z]+$/.test(formData.CreatorsName)) {
    errors.CreatorsName = "You must enter only letters";
  }

  // Validate PokemonName
  if (!formData.PokemonName || !/^[a-zA-Z]+$/.test(formData.PokemonName)) {
    errors.PokemonName = "You must enter only letters";
  }

  return errors;
}
