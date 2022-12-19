import React from "react";

export default function Paginado({
  pokemonsPerPage, // indica cuántos elementos se mostrarán en cada página
  currentPokemon, // es el número total de elementos de la lista
  indexOfFirstPokemon, // es el índice del primer elemento de la lista que se está mostrando en la página actual
  paginado, // es la función que se llamará cada vez que se haga clic en un botón
}) {
  // Array para almacenar los números de página que se mostrarán en los botones
  const pageNumbers = [];
  // Iterar desde 1 hasta el número total de páginas
  // (calculado como el cociente entre el número total de elementos y el número de elementos por página)
  for (let i = 1; i <= Math.ceil(currentPokemon / pokemonsPerPage); i++) {
    // Añadir el número de página actual al array
    pageNumbers.push(i);
  }

  // Calcular el número de la página actual
  // como el cociente entre el índice del primer elemento de la lista que se está mostrando
  // y el número de elementos por página, más 1
  // (esto es necesario porque el índice de los elementos de un array empieza en 0,
  // mientras que los números de página empiezan en 1)
  const currentPage = Math.ceil(indexOfFirstPokemon / pokemonsPerPage) + 1;

  return (
    // Componente nav con una lista desordenada de botones
    <nav>
      <ul className="pagination pagination-lg">
        {pageNumbers &&
          // Iterar sobre cada número de página y devolver un botón por cada uno
          pageNumbers.map((number) => (
            <li className="page-item " key={number}>
              <button
                className={
                  // Añadir la clase "active" al botón de la página actual
                  number === currentPage ? "page-link active" : "page-link"
                }
                onClick={() => paginado(number)} // Llamar a la función paginado al hacer clic en el botón
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
