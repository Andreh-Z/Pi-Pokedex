import React from "react";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../Redux/action";

function Filtros({ setCurrentPage, orden, setOrden }) {
  const type = useSelector((state) => {
    return state.types;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <div className="d-flex flex-row mb-5 mt-5 gap-2">
      <Form.Select aria-label="Default select example">
        <option>Attack value</option>
        <option value="1">Higher attack ratio</option>
        <option value="2">Lower attack ratio</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
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
      <Form.Select aria-label="Default select example">
        <option>Defense value</option>
        <option value="1">Higher defense value</option>
        <option value="2">Lower defense value</option>
      </Form.Select>
    </div>
  );
}

export default Filtros;
