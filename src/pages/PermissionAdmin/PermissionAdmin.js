import React from "react";
import { PermissionsAdminForm } from "../../components/Auth";
import "./PermissionAdmin.css";
import { useEffect, useState } from "react";
import { rolPermissionGetByRoleId } from "../../services";

export function PermissionAdmin() {
  

  return (
    <div className="permissionsAdmin_container">
      <PermissionsAdminForm />
    </div>
  );
}