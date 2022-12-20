import React from "react";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypes,
  filterByAttack,
  filterByType,
  filterByDefense,
} from "../Redux/action";

function Filtros({ setCurrentPage, orden, setOrden }) {
  const type = useSelector((state) => {
    return state.types;
  });
  const dispatch = useDispatch();

  const filter_attack = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByAttack(e.target.value));
    setOrden(`Orden de ${e.target.value}`);
  };

  const filter_type = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByType(e.target.value));
    setOrden(`Orden de ${e.target.value}`);
  };

  const filter_defense = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByDefense(e.target.value));
    setOrden(`Orden de ${e.target.value}`);
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <div className="d-flex flex-row mb-5 mt-5 gap-2">
      <Form.Select aria-label="Default select example" onChange={filter_attack}>
        <option value="All">Descendant/Ascendant Attack value</option>
        <option value="Desc">From lowest to highest attack value</option>
        <option value="Asc">From highest to lowest attack value</option>
      </Form.Select>
      <Form.Select aria-label="Default select example" onChange={filter_type}>
        <option>Filter by Type</option>
        {Array.isArray(type)
          ? type.map((element) => {
              return <option value={element}>{element}</option>;
            })
          : null}
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Created by</option>
        <option value="1">User</option>
        <option value="2">From the API</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Sort in</option>
        <option value="1">Ascending A-Z</option>
        <option value="2">Descending Z-A</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={filter_defense}
      >
        <option value="All">Descendant/Ascendant Defense value</option>
        <option value="Desc">From lowest to highest defense value</option>
        <option value="Asc">From highest to lowest defense value</option>
      </Form.Select>
    </div>
  );
}

export default Filtros;
