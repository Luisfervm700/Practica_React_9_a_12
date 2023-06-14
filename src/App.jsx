import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./components/Principal";
import ErrorPage from "./components/ErrorPage";
import Counter from "./components/Counter";
import ListaTareas from "./components/ListaTareas";
import ApiGet from "./components/consumo1";
import ApiGetFetch from "./components/consumo2";
import Contexto from "./context/contexto";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
      errorElement: <ErrorPage />,
      children: [
        {          path: "contar/",
          element: <Counter />,
        },
        {
          path: "listado/",
          element: <ListaTareas />,
          errorElement: <ErrorPage />,
        },
        {
          path: "consumo/",
          element: <ApiGet />,
          errorElement: <ErrorPage />,
        },
      ],
    },

    {
      path: "contexto/",
      element: <contexto/>,
      errorElement: <ErrorPage />,
    },

  ]);
  return <RouterProvider router={router} />;
}


