import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Filtros from "./Filtros";
import { getAllPokemons } from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);

  React.useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);
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
          {Array.isArray(pokemons) ? (
            pokemons.map((element) => {
              return (
                <div>
                  <Card
                    id={element.id}
                    name={element.name}
                    image={element.image}
                    vida={element.vida}
                    ataque={element.ataque}
                    defensa={element.defensa}
                    tipo={
                      Array.isArray(element.tipo)
                        ? element.tipo.map((element) => element)
                        : element.tipo
                    }
                  />
                </div>
              );
            })
          ) : (
            <MDBCol
              size={12}
              className="d-flex flex-row flex-wrap gap-3 m-auto justify-content-center"
            >
              <div>
                <Card
                  id={pokemons.id}
                  name={pokemons.name}
                  image={pokemons.image}
                  vida={pokemons.vida}
                  ataque={pokemons.ataque}
                  defensa={pokemons.defensa}
                  tipo={
                    Array.isArray(pokemons.tipo)
                      ? pokemons.tipo.map((element) => element)
                      : pokemons.tipo
                  }
                />
              </div>
            </MDBCol>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
