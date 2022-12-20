import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBListGroup,
  MDBCheckbox,
  MDBListGroupItem,
  MDBFile,
  MDBBtn,
} from "mdb-react-ui-kit";
import { getTypes } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import validateForm from "./validate";

import NavBar from "../NavBar";

export default function FormCreate() {
  const type = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [formData, setFormData] = useState({
    pokeName: "",
    attackValue: "",
    defenseValue: "",
    speed: "",
    flexCheck: false,
    types: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
    }
  };

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedTypes(
      selectedTypes.includes(selectedOption)
        ? selectedTypes.filter((option) => option !== selectedOption)
        : [...selectedTypes, selectedOption]
    );

    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    const errors = validateForm({ ...formData, [name]: value });
    setErrors(errors);
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  formData.types = formData.types.toString();
  const selectedOptions = formData.types.split(",");

  return (
    <MDBContainer className="bg-white">
      <MDBRow className="border border-2 shadow-lg">
        <MDBCol size={12}>
          <NavBar />
        </MDBCol>
        <MDBCol size={12} className="text-center mt-5 mb-5">
          <h1>Welcome to PokeCreate</h1>
          <h5>Here you can make your own Pokemon!</h5>
        </MDBCol>
        <MDBCol size={12} className="text-center border">
          <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
            <MDBListGroupItem>All fields must be completed.</MDBListGroupItem>
            <MDBListGroupItem>
              You cannot use characters other than letters or numbers.
            </MDBListGroupItem>
            <MDBListGroupItem>
              You can select more than one "Type" per Pokemon.
            </MDBListGroupItem>
            <MDBListGroupItem>
              You cannot repeat the name of a Pokemon already created.
            </MDBListGroupItem>
            <MDBListGroupItem>
              The values for the Attack and Defense fields are limited to a
              minimum of 1 and a maximum of 50 points.
            </MDBListGroupItem>
            <MDBListGroupItem>
              Please be careful with the picture you upload when creating your
              Pokemon. Let's keep respect and order, otherwise, you may suffer
              penalties.
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-column mt-5 mb-5 gap-4 align-items-center">
              <div>
                <MDBInput
                  label="Pokemon Name"
                  id="form1"
                  type="text"
                  value={formData.pokeName}
                  name="pokeName"
                  onChange={handleChange}
                />
                {errors.pokeName && (
                  <Form.Text className="text-danger">
                    {errors.pokeName}
                  </Form.Text>
                )}
              </div>
              <div>
                <MDBInput
                  label="Pokemon valor attack"
                  name="attackValue"
                  value={formData.attackValue}
                  id="form1"
                  type="text"
                  onChange={handleChange}
                />
                {errors.attackValue && (
                  <Form.Text className="text-danger">
                    {errors.attackValue}
                  </Form.Text>
                )}
              </div>
              <div>
                <MDBInput
                  label="Pokemon defense points"
                  id="form1"
                  type="text"
                  value={formData.defenseValue}
                  name="defenseValue"
                  onChange={handleChange}
                />
                {errors.defenseValue && (
                  <Form.Text className="text-danger">
                    {errors.defenseValue}
                  </Form.Text>
                )}
              </div>
              <div>
                <MDBInput
                  label="Pokemon speed"
                  id="form1"
                  type="text"
                  name="speed"
                  value={formData.speed}
                  onChange={handleChange}
                />
                {errors.speed && (
                  <Form.Text className="text-danger">{errors.speed}</Form.Text>
                )}
              </div>
              <div>
                <MDBFile label="Pokemon Pict" size="sm" id="customFile" />
              </div>
              <div>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="types"
                  multiple
                >
                  {Array.isArray(type)
                    ? type.map((element) => {
                        return (
                          <option
                            selected={selectedTypes.includes(element)}
                            value={element}
                          >
                            {element}
                          </option>
                        );
                      })
                    : null}
                </Form.Select>
                {/* Error, esto registra todos los valores de los inputs, y no solo de los select */}
                <ul>
                  {selectedTypes.map((option) => (
                    <li>{option}</li>
                  ))}
                </ul>
                {errors.types && (
                  <Form.Text className="text-danger">{errors.types}</Form.Text>
                )}
              </div>

              <MDBCheckbox
                name="flexCheck"
                onChange={handleChange}
                id="flexCheckDefault"
                value={formData.flexCheck}
                label="I have respected all the rules and I am responsible for possible consequences if I violate any of them."
              />
              {errors.flexCheck && (
                <Form.Text className="text-danger">
                  {errors.flexCheck}
                </Form.Text>
              )}
              <MDBBtn>Create</MDBBtn>
            </div>
          </Form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
