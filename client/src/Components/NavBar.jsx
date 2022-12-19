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

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons, getPokemonName } from "../Redux/action";

export default function NavBar({ setCurrentPage, orden, setOrden }) {
  const [showBasic, setShowBasic] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    searchbar: "",
  });

  function handleOnChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonName(input.searchbar));
    setOrden(1);
    console.log(`Ordenado ${orden}`);
  }

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

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
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
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
