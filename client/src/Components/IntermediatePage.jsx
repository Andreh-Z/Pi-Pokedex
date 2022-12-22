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
import NavBar from "./NavBar";
import FormCreate from "./CreatePokemon/FormCreate";
import { useNavigate } from "react-router-dom";
export default function IntermediatePage() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  function validateCheckbox() {
    if (!isChecked) {
      setShowError(true);
      return false;
    }

    setShowError(false);
    return true;
  }

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
          <MDBCol size={12} className="mt-5 mb-5">
            By checking this box, you are acknowledging that you think this
            website is incredible and you have no reservations about it. Please
            note that this is a binding agreement and you will not be able to
            retract this statement
          </MDBCol>
          <MDBCol>
            <Form>
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Accept terms & conds"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
              />
              {showError && (
                <p style={{ color: "red" }}>
                  You must accept the terms and conditions to continue.
                </p>
              )}
              <MDBBtn
                onClick={() => {
                  // Validate the checkbox
                  const isValid = validateCheckbox();

                  // If the checkbox is valid, redirect the user to the specified URL
                  if (isValid) {
                    navigate("/form");
                  }
                }}
              >
                Enviar
              </MDBBtn>
            </Form>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
