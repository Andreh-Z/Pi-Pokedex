import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Filtros from "./Filtros";
import { getAllPokemons } from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import Paginado from "./Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);

  // Establece el número de página actual en 1
  const [currentPage, setCurrentPage] = useState(1);

  // Establece el número de pokemones por página en 10
  const [pokemonsPerPage, setpokemonsPerPage] = useState(10);

  // Calcula el índice del último pokemon a mostrar en la página actual
  const indexOfLastPokemon = currentPage * pokemonsPerPage;

  // Calcula el índice del primer pokemon a mostrar en la página actual
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  // Establece el orden en blanco
  const [orden, setOrden] = useState("");

  // Obtiene el subconjunto de pokemones que deben mostrarse en la página actual
  const currentPokemon = Array.isArray(pokemons)
    ? pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    : pokemons;

  // Establece el número de página actual al número de página proporcionado
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  React.useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);
  return (
    <MDBContainer className="bg-white shadow-lg text-white min-vh-100">
      <MDBRow>
        <MDBCol size={12}>
          <NavBar
            setCurrentPage={setCurrentPage}
            orden={orden}
            setOrden={setOrden}
          />
        </MDBCol>
        <MDBCol size={12}>
          <Filtros
            setCurrentPage={setCurrentPage}
            orden={orden}
            setOrden={setOrden}
          />
        </MDBCol>
        <MDBCol
          size={12}
          className="d-flex flex-row flex-wrap gap-3 justify-content-center"
        >
          {Array.isArray(currentPokemon) ? (
            currentPokemon.map((element) => {
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
                  id={currentPokemon.id}
                  name={currentPokemon.name}
                  image={currentPokemon.image}
                  vida={currentPokemon.vida}
                  ataque={currentPokemon.ataque}
                  defensa={currentPokemon.defensa}
                  tipo={
                    Array.isArray(currentPokemon.tipo)
                      ? currentPokemon.tipo.map((element) => element)
                      : currentPokemon.tipo
                  }
                />
              </div>
            </MDBCol>
          )}
        </MDBCol>
        <MDBCol size={12} className="mt-5 mb-3 d-flex justify-content-center">
          <div>
            <Paginado
              pokemonsPerPage={pokemonsPerPage}
              currentPokemon={pokemons.length}
              indexOfFirstPokemon={indexOfFirstPokemon}
              paginado={paginado}
            />
            <Paginado />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
