import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UnLoggedLayout } from "../layout";
import {
  Home,
  Login,
  Register,
  Reservation,
  ResetPassword,
  AdminRols,
  Documents,
  PermissionAdmin
  ParkingOwner,
} from "../pages";

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
          <Route path="/roles" element={<AdminRols />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/parkingOwner" element={<ParkingOwner />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/permissionAdmin" element={<PermissionAdmin />} />
        </Routes>
      </UnLoggedLayout>
    </BrowserRouter>
  );
}
