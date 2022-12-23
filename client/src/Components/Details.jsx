import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { pokemonID } from "../Redux/action";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detalles = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(pokemonID(id));
  }, [dispatch]);

  return (
    <MDBContainer fluid className="bg-light">
      <MDBRow>
        <NavBar />
        <MDBCol
          size={12}
          className="text-center fs-1 mb-5 mt-3 text-capitalize"
        >
          {detalles.name}
        </MDBCol>
        <MDBCol size={6} className="d-flex justify-content-center mb-5">
          <img
            src={detalles.image}
            className="img-fluid shadow-lg border border-2"
            style={{ minHeight: "320px" }}
          />
        </MDBCol>
        <MDBCol size={6}>
          <MDBListGroup
            style={{ minWidth: "22rem" }}
            className="border border-2 shadow-lg"
          >
            <MDBListGroupItem noBorders>
              Pokemon ID: {detalles.id}
            </MDBListGroupItem>
            <MDBListGroupItem noBorders>
              Health: {detalles.vida}
            </MDBListGroupItem>
            <MDBListGroupItem noBorders>
              Value Attack: {detalles.ataque}
            </MDBListGroupItem>
            <MDBListGroupItem noBorders>
              Defense value: {detalles.defensa}
            </MDBListGroupItem>
            <MDBListGroupItem noBorders>
              Height: {detalles.altura}
            </MDBListGroupItem>
            <MDBListGroupItem noBorders>
              Weight: {detalles.peso}
            </MDBListGroupItem>
            <MDBListGroupItem noBorders>
              Type:
              {detalles.tipo ? (
                detalles.tipo.map((element) => {
                  return <div className="d-inline-flex m-2">{element}</div>;
                })
              ) : (
                <h3>This Pokemons doesn't have an specific type.</h3>
              )}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol size={12} className="text-center">
          <Link to="/home">
            <MDBBtn color="primary">Home</MDBBtn>
          </Link>
        </MDBCol>
        <MDBCol size={12} className="bottom">
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
