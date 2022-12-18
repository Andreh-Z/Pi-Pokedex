import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Filtros from "./Filtros";

export default function Home() {
  return (
    <MDBContainer className="bg-white shadow-lg text-white min-vh-100">
      <MDBRow>
        <MDBCol size={12}>
          <NavBar />
        </MDBCol>
        <MDBCol size={12}>
          <Filtros />
        </MDBCol>
        <MDBCol
          size={12}
          className="d-flex flex-row flex-wrap gap-3 justify-content-center"
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
