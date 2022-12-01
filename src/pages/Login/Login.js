import React from "react";
import { LoginForm } from "../../components/Auth";

import "./Login.css";

export function Login() {
  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
}
