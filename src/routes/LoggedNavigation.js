import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UnLoggedLayout } from "../layout";
import { Home, Login, Register, Reservation, ResetPassword, AdminRols } from "../pages";

/**
 * Funcion que nos genera las rutas y enviva por props el componente
 * @returns No retorna, manda por props a UnLoggedLayout
 * No esta del todo implementado
 */
export function LoggedNavigation() {
  return (
    <BrowserRouter>
      <UnLoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/adminRols" element={<AdminRols />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UnLoggedLayout>
    </BrowserRouter>
  );
}
