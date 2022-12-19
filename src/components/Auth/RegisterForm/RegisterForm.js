import React, { useState } from "react";
import "./RegisterForm.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { getCurrentLocation } from "../../../helpers";
import { ParkingForm, VehicleForm } from "../../Forms";
import { useFormik } from "formik";
import { initialValuesRegister, validationRegister } from "./RegisterForm.data";
//import { storeRegister } from "../../../services";

export function RegisterForm() {
  const [ownerOrUser, setOwnerOrUser] = useState(false);
  const [idPeople, setIdPeople] = useState(null);

  /**
   * false : usuario
   * true : owner
   */
  const onChangeType = () => {
    setOwnerOrUser((prevState) => !prevState);
  };
  /**
   * Toma los valores de los formularios y los convierte en un objeto.
   * @param {*} event captura de formularios
   */

  const formik = useFormik({
    initialValues: initialValuesRegister(ownerOrUser),
    validationSchema: validationRegister(ownerOrUser),
    validateOnChange: false,
    onSubmit: (values) => {
      let id_rol = "";

      if (ownerOrUser) {
        // Owner
        id_rol = "2";
      } else {
        // User
        id_rol = "1";
      }
      console.log(values.email);
      console.log(values.vehicle);
    },
  });

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
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              type="text"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.last_name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.last_name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
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
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
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
          <Form.Group as={Col}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
          </Form.Group>
        </Row>
        {ownerOrUser ? (
          <ParkingForm
            errors={formik.errors}
            handleChange={formik.handleChange}
          />
        ) : (
          <VehicleForm
            errors={formik.errors.vehicle}
            handleChange={formik.handleChange}
          />
        )}
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
