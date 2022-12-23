import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Card({ name, image, vida, ataque, defensa, id, tipo }) {
  return (
    <MDBCard style={{ minWidth: "320px" }}>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay text-center"
      >
        <MDBCardImage
          src={image}
          fluid
          alt={name}
          style={{ minHeight: "100px", maxHeight: "100px" }}
        />
        <a>
          <div
            className="mask text-danger"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          >
            {tipo &&
              tipo.map((element) => {
                return (
                  <ul>
                    <li className="bg-dark rounded">Type: {element}</li>
                  </ul>
                );
              })}
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody className="text-dark text-center text-capitalize">
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          <ul>
            <li>Points of life: {vida}</li>
            <li> Attack points: {ataque}</li>
            <li> Denfese rate: {defensa}</li>
          </ul>
        </MDBCardText>
        <Link to={`/details/${id}`}>
          <MDBBtn color="success">Details</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
}
