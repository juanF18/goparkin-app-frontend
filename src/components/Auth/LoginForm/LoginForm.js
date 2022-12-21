import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { initalValuesLogin, validationSchemaLogin } from "./LoginForm.data";
import { LoginRequest } from "../../../services";
import "./LoginForm.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  /**
   * Libreria usada para que se pueda hacer maenejo de los formularios
   *  Formik
   * Libreria para validar los formularios
   *  Yup
   * Lo que se esta manejado aca viene del archivo LoginForm.data.js
   * aca es donde creamos los valores iniciales del formulario y
   * donde le damos las validaciones al formulario como seria que tiene
   * que ser tipo correo o lo que se tiene que ingresar es un string
   */
  const loginRes = async (email, password) => {
    let data = await LoginRequest(email, password);
    console.log(data);
    setIsLogged(data);
  };
  const formik = useFormik({
    initialValues: initalValuesLogin(),
    validationSchema: validationSchemaLogin(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await loginRes(formValues.email, formValues.password);
        if (localStorage.getItem("token")) {
          alert("Iniciaste sesión");
          navigate("/");
        } else {
          alert("Usuario o contraseña invalido");
        }
      } catch (error) {
        alert(error + "Error al iniciar sesion");
      }
    },
  });

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2 className="title-login">Find the best place for your vehicle!</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.password}
          />
          <Button onClick={onShowHidenPassword} variant="secondary">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Button className="btn-login" variant="success" type="submit">
        Sign in
      </Button>
      <div className="login-options">
        <p>
          Are you not registered?{" "}
          <span className="link-register-form">
            <a
              style={{ color: "black" }}
              as={Link}
              to="/register"
              href="/register"
            >
              Sign up
            </a>
          </span>
        </p>
        <p>
          Did you forget your password
          <br />
          <span className="link-register-form">
            <a
              style={{ color: "black" }}
              as={Link}
              to="/resetPassword"
              href="/resetPassword"
            >
              Recover Password
            </a>
          </span>
        </p>
      </div>
    </Form>
  );
}
