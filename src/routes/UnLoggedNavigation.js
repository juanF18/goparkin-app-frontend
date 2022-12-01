import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UnLoggedLayout } from "../layout";
import { Home, Login } from "../pages";

/**
 * Funcion que nos genera las rutas y enviva por props el componente
 * @returns No retorna, manda por props a UnLoggedLayout
 */
export function UnLoggedNavigation() {
  return (
    <BrowserRouter>
      <UnLoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UnLoggedLayout>
    </BrowserRouter>
  );
}
