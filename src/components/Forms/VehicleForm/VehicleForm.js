import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function VehicleForm(props) {
  const { errors, handleChange } = props;
  return (
    <Row className="mb-3">
      <h3>Add a vehicle</h3>
      <Form.Group as={Col}>
        <Form.Label>Type</Form.Label>
        <Form.Select name="vehicle.type" onChange={handleChange}>
          <option value="motorcycle">Motorcycle</option>
          <option value="car">Car</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Plate</Form.Label>
        <Form.Control
          name="vehicle.plate"
          type="text"
          onChange={handleChange}
          isInvalid={errors ? !!errors.plate : ""}
        />
        <Form.Control.Feedback type="invalid">
          {errors ? errors.plate : ""}
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
}
