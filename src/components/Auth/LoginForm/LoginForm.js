import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginForm.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <Button onClick={onShowHidenPassword} variant="secondary">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputGroup>
      </Form.Group>

      <Button className="btn-login" variant="success" type="submit">
        Sign in
      </Button>
      <div className="login-options">
        <p>
          Aun no estas registrado? <span>Registrarse</span>
        </p>
      </div>
    </Form>
  );
}
