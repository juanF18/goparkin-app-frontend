import React, { useState } from "react";
import "./RegisterForm.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ParkingForm, VehicleForm } from "../../Forms";

export function RegisterForm() {
  /**
   * false -> user
   * true -> owner
   */
  const [ownerOrUser, setOwnerOrUser] = useState(false);

  const onChangeType = () => {
    setOwnerOrUser((prevState) => !prevState);
  };
  /**
   * Toma los valores de los formualarios y los convierte en un objeto.
   * @param {*} event captura de formularios
   */
  const formSubmit = (event) => {
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    event.preventDefault();

    console.log({
      name: event.target.name.value,
      last_name: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      password: password === confirmPassword ? password : "",
    });
  };

  return (
    <>
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
    </>
  );
}
