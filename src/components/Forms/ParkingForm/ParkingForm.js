import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export function ParkingForm() {
  return (
    <>
      {/* Sector de nombre de parqueader */}
      <Row className="mb-3">
        <h3>Add a parking</h3>
        <Form.Group as={Col}>
          <Form.Label>Parking name</Form.Label>
          <Form.Control name="parkingName" type="text" />
        </Form.Group>
      </Row>
      {/* Sector de direccion */}
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Adress</Form.Label>
          <Form.Control name="adress" type="text" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Department</Form.Label>
          <Form.Control name="department" type="text" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control name="city" type="text" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}></Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}></Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}></Form.Group>
      </Row>
    </>
  );
}
