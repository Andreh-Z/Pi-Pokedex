import React, { useState } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBInputGroup,
  MDBCheckbox,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../Redux/action";

export default function FormCreate() {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <MDBContainer className="bg-light">
      <MDBRow>
        <MDBCol>
          <MDBValidation>
            <MDBValidationItem>
              <MDBInput
                name="name"
                id="validationCustom01"
                required
                label="Pokemon Name"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="creatorsName"
                id="validationCustom01"
                required
                label="Your name!"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="vida"
                id="validationCustom01"
                required
                label="Pokemon HP"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="ataque"
                id="validationCustom01"
                required
                label="Attack from 1 to 220"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="defensa"
                id="validationCustom01"
                required
                label="Defense from 220 to 440"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="velocidad"
                id="validationCustom01"
                required
                label="Speed from 1 to 110"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="altura"
                id="validationCustom01"
                required
                label="Height from 1 to 10"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <MDBInput
                name="peso"
                id="validationCustom01"
                required
                label="Weight from 1200 to 2500"
              />
            </MDBValidationItem>
            <MDBValidationItem>
              <Form.Select aria-label="Select Type">
                {Array.isArray(types) ? (
                  types.map((element) => {
                    return <option>{element}</option>;
                  })
                ) : (
                  <h1>Something is wrong with the types!</h1>
                )}
              </Form.Select>
            </MDBValidationItem>

            <MDBBtn type="submit">Submit</MDBBtn>
          </MDBValidation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
