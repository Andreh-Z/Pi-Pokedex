import React from "react"; // Importamos el módulo de React
import { createBrowserRouter } from "react-router-dom"; // Importamos la función createBrowserRouter de react-router-dom
import Home from "../Components/Home"; // Importamos el componente Home
import Landing from "../Components/Landing"; // Importamos el componente Landing
import NavBar from "../Components/NavBar"; // Importamos el componente NavBar
import ErrorPage from "./ErrorPage"; // Importamos el componente ErrorPage

const router = createBrowserRouter([
  // Creamos el componente de enrutamiento con createBrowserRouter
  {
    path: "/", // La ruta raíz
    element: <Landing />, // Mostramos el componente Landing para la ruta raíz
    errorElement: <ErrorPage />, // Mostramos el componente ErrorPage si ocurre un error al cargar la ruta raíz
  },
  {
    path: "/home", // La ruta /home
    element: <Home />, // Mostramos el componente Home para la ruta /home
  },
]);

export default router; // Exportamos el componente de enrutamiento como el módulo predeterminado
