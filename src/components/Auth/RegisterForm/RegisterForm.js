import React, { useState } from "react";
import "./RegisterForm.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { getCurrentLocation } from "../../../helpers";
import { ParkingForm, VehicleForm } from "../../Forms";
import { storeRegister } from "../../../services";

export function RegisterForm() {
  const [ownerOrUser, setOwnerOrUser] = useState(false);
  const [idPeople, setIdPeople] = useState(null);

  const onChangeType = () => {
    setOwnerOrUser((prevState) => !prevState);
  };
  /**
   * Toma los valores de los formularios y los convierte en un objeto.
   * @param {*} event captura de formularios
   */
  const formSubmit = async (event) => {
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

    const name = event.target.name.value;
    const last_name = event.target.lastName.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    event.preventDefault();

    console.log({
      name: event.target.name.value,
      last_name: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      password: password === confirmPassword ? password : "",
      plate: event.target.plate.value,
      type: event.target.typeVehicle.value,
    });

    // Promise

    //setIdPeople(storeRegister(id_rol, name, last_name, phone, email, password));

    alert("Enviando Formulario de Registro " + idPeople);

    // Redireccionar al login
  };

  return (
    <div className="container_register_form">
      <div className="header-register">
        <h1>Register</h1>
        <Form.Check
          className="switch-owner"
          type="switch"
          id="custom-switch"
          label="Are you the owner?"
          onClick={onChangeType}
        />
      </div>
      <Form onSubmit={formSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="name" type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastName" type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" type="text" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
          </Form.Group>
        </Row>
        {ownerOrUser ? <ParkingForm /> : <VehicleForm />}
        <Row className="submitBtn mb-3">
          <Button variant="success" type="submit">
            Register
          </Button>
        </Row>
      </Form>
      <br></br>
    </div>
  );
}
