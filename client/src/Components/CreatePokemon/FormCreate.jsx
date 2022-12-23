import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validateForm from "./validate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/action";

function FormCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  // Usamos useState para crear un estado para la opción seleccionada y una función para actualizarlo
  const [selectedOption, setSelectedOption] = useState("");

  // Usamos useEffect para obtener los tipos de Pokémon cuando se monta el componente
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  // Declaramos un objeto de estado y una función para actualizarlo
  const [formData, setFormData] = useState({
    creatorsName: "",
    pokemonName: "",
    attack: "",
    speed: "",
    defense: "",
    height: "",
    weight: "",
    photo: null,
  });
  const [errors, setErrors] = useState({});

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Añadimos la opción seleccionada al formData
    formData.select = selectedOption;
    // Validamos los campos del formulario
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // Si no hay errores de validación, enviamos el formulario
    if (Object.keys(validationErrors).length === 0) {
      // Realizamos la lógica de envío del formulario aquí
      setSelectedOption("");
    }
  };

  // Función para manejar los cambios de entrada
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "select") {
      // Si el campo es la opción seleccionada, actualizamos el estado de la opción seleccionada
      setSelectedOption(value);
    } else {
      // Si el campo es otro, actualizamos el estado del formulario
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Función para manejar los cambios de archivo de entrada
  const handleFileChange = (event) => {
    // Obtenemos el archivo seleccionado
    const file = event.target.files[0];
    // Actualizamos el estado del formulario con el archivo seleccionado
    setFormData((prevState) => ({
      ...prevState,
      photo: file,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCreatorsName">
        <Form.Label>Creators Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter creators name"
          name="creatorsName"
          value={formData.creatorsName}
          onChange={handleChange}
          isInvalid={!!errors.creatorsName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.creatorsName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPokemonName">
        <Form.Label>Pokemon Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pokemon name"
          name="pokemonName"
          value={formData.pokemonName}
          onChange={handleChange}
          isInvalid={!!errors.pokemonName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.pokemonName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formAttack">
        <Form.Label>Attack Value</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter attack value"
          name="attack"
          value={formData.attack}
          onChange={handleChange}
          isInvalid={!!errors.attack}
        />
        <Form.Control.Feedback type="invalid">
          {errors.attack}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formSpeed">
        <Form.Label>Speed</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter speed"
          name="speed"
          value={formData.speed}
          onChange={handleChange}
          isInvalid={!!errors.speed}
        />
        <Form.Control.Feedback type="invalid">
          {errors.speed}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formDefense">
        <Form.Label>Defense</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter defense"
          name="defense"
          value={formData.defense}
          onChange={handleChange}
          isInvalid={!!errors.defense}
        />
        <Form.Control.Feedback type="invalid">
          {errors.defense}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          isInvalid={!!errors.height}
        />
        <Form.Control.Feedback type="invalid">
          {errors.height}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          isInvalid={!!errors.weight}
        />

        <Form.Control.Feedback type="invalid">
          {errors.weight}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPhoto">
        <Form.Label>Pokemon Photo</Form.Label>
        <Form.Control
          type="file"
          name="photo"
          onChange={handleFileChange}
          isInvalid={!!errors.photo}
        />
        <Form.Control.Feedback type="invalid">
          {errors.photo}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="selectType">
        <Form.Label>Select Option</Form.Label>
        <Form.Control
          as="select"
          name="select"
          value={selectedOption}
          onChange={handleChange}
          isInvalid={!!errors.select}
        >
          {types.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.select}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCreate;
