import React from "react";
import "./RegisterForm.css";
import { Col, Form, Row } from "react-bootstrap";

export function RegisterForm() {
  return (
    <>
      <div className="header-register">
        <h1>Register</h1>
        <Form.Check
          className="switch-owner"
          type="switch"
          id="custom-switch"
          label="Are you the owner?"
        />
      </div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}
