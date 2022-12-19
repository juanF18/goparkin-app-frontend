import React, { useState } from "react";
import "./RegisterForm.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { getCurrentLocation } from "../../../helpers";
import { ParkingForm, VehicleForm } from "../../Forms";
import { storeRegister } from "../../../services";
import { useFormik } from "formik";
import {
  initialValuesRegister,
  validationSchemaRegister,
} from "./RegisterForm.data";
import { Link, useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [ownerOrUser, setOwnerOrUser] = useState(false);
  const [idPeople, setIdPeople] = useState(null); // Almacena el id recuperado del Response que genera el Request, para usarlo como FK en Vehicle o Parking
  const navigate = useNavigate();

  /**
   * Gestiona los valores de los formularios
   * Realizar validaciones por medio de Formik y Yup
   * Envía la data al backend con los Axios
   */
  const formik = useFormik({
    initialValues: initialValuesRegister(),
    validationSchema: validationSchemaRegister(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      console.log("hola");

      // Escoge el rol y la información correspondiente
      // en base al formulario que llena el usuario
      let id_rol = "";

      if (ownerOrUser) {
        // Owner
        id_rol = "2";
      } else {
        // User
        id_rol = "1";
      }

      try {
        await storeRegister(
          id_rol,
          formValues.name,
          formValues.last_name,
          formValues.phone,
          formValues.email,
          formValues.password
        )
          .then((res) => {
            console.log(res.data);
            alert(`Enviando Formulario de Registro ${res.data.id}`);
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        alert(`${error} - Error al registrar usuario`);
      }
    },
  });

  const onChangeType = () => {
    setOwnerOrUser((prevState) => !prevState);
  };

  return (
    <div className="container_register_form">
      <div className="header-register">
        <h1>Register</h1>

        {/* Check Owner or User */}
        <Form.Check
          className="switch-owner"
          type="switch"
          id="custom-switch"
          label="Are you the parking owner?"
          onClick={onChangeType}
        />
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <Row>
          {/* Name */}
          <Form.Group className="col-md-3" controlId="formBasicName">
            <Form.Label>Name *</Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Enter name"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="col-md-3" controlId="formBasicLastName">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              name="last_name"
              type="last_name"
              placeholder="Enter last name"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.last_name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.last_name}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Phone */}
          <Form.Group className="col-md-3" controlId="formBasicPhone">
            <Form.Label>Phone *</Form.Label>
            <Form.Control
              name="phone"
              type="phone"
              placeholder="Enter phone"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="col-md-3" controlId="formBasicEmail">
            <Form.Label>Email *</Form.Label>
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
        </Row>

        {/* Form Parking or Vehicle */}
        {ownerOrUser ? <ParkingForm /> : <VehicleForm />}

        <Row>
          {/* Password */}
          <Form.Group className="col-md-4" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group className="col-md-4" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password *</Form.Label>
            <Form.Control
              name="confirm_password"
              type="password"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Password */}
          <div className="col-md-4">
            <Button variant="success" type="submit">
              Register
            </Button>
          </div>
        </Row>
      </Form>

      <br />
    </div>
  );
}
