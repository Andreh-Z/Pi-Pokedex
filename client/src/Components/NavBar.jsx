import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons, getPokemonName } from "../Redux/action";

export default function NavBar({ setCurrentPage, orden, setOrden }) {
  // Estado para controlar si se muestra un componente básico o no
  // showBasic es el valor del estado y setShowBasic es la función para actualizar el valor del estado
  const [showBasic, setShowBasic] = useState(false);
  // Hook de dispatch para enviar acciones al store de Redux
  const dispatch = useDispatch();
  // Estado para almacenar el valor del input de búsqueda
  // input es el valor del estado y setInput es la función para actualizar el valor del estado
  const [input, setInput] = useState({
    searchbar: "", // Valor del input de búsqueda
  });

  // Función manejadora del evento onChange del input de búsqueda
  function handleOnChange(e) {
    // Prevenir la recarga de la página al hacer submit del formulario
    e.preventDefault();
    // Actualizar el estado del input con el nuevo valor del input de búsqueda
    setInput({
      // Mantener el resto de los valores del estado del input
      ...input,
      // Actualizar el valor del input de búsqueda con el nuevo valor
      [e.target.name]: e.target.value,
    });
    console.log(input); // Mostrar el valor del input en la consola
  }

  // Función manejadora del evento onSubmit del formulario de búsqueda
  function onSubmit(e) {
    // Prevenir la recarga de la página al hacer submit del formulario
    e.preventDefault();
    // Enviar la acción getPokemonName al store de Redux con el valor del input de búsqueda como parámetro
    dispatch(getPokemonName(input.searchbar));
    // Establecer el orden a 1
    setOrden(1);
    console.log(`Ordenado ${orden}`); // Mostrar el valor del orden en la consola
  }

  // Efecto que se ejecuta cuando el componente se monta
  useEffect(() => {
    // Enviar la acción getAllPokemons al store de Redux
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to="/" className="text-dark">
            Pokedex
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <Link to="/home">
                <MDBNavbarLink active aria-current="page">
                  Home
                </MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/form">
                <MDBNavbarLink>Create your pokemon</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Log In
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto" onSubmit={onSubmit}>
            <input
              type="search"
              onChange={handleOnChange}
              className="form-control"
              name="searchbar"
              value={input.searchbar}
              placeholder="Search here..."
            />
            <MDBBtn color="primary" type="submit">
              Search
            </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
