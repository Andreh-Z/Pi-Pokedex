import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "mdb-react-ui-kit";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    pokemonName: "",
    attackSpeed: "",
    defenseValue: "",
    speed: "",
    picture: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí puedes enviar los datos del formulario a tu backend o hacer otra acción
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Pokemon Name</Label>
        <Input
          type="text"
          name="pokemonName"
          value={formData.pokemonName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Attack Speed</Label>
        <Input
          type="number"
          name="attackSpeed"
          value={formData.attackSpeed}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Defense Value</Label>
        <Input
          type="number"
          name="defenseValue"
          value={formData.defenseValue}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Speed</Label>
        <Input
          type="number"
          name="speed"
          value={formData.speed}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Upload a Picture</Label>
        <Input
          type="file"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateForm;
