import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Principal from "./components/Principal";
import ErrorPage from "./components/ErrorPage";
import Counter from "./components/Counter";
import ListaTareas from "./components/ListaTareas";

export function App() {
  const router = createBrowserRouter ([
    {
      path:"/",
      element:<Principal/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path:"contar/",
          element:<Counter/>,
        },
        {
          path:"listado/",
          element:<ListaTareas/>,
          errorElement:<ErrorPage/>,
        },
        {
          path:"consumo/",
          element:<Apiget/>,
          errorElement:<ErrorPage/>,
        },
      ],
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
