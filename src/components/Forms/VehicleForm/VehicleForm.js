import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function VehicleForm() {
  const [value, setValue] = useState("");
  return (
    <Row className="mb-3">
      <h3>Add a vehicle</h3>
      <Form.Group as={Col}>
        <Form.Label>Type</Form.Label>
        <Form.Select
          value={value}
          name="typeVehicle"
          onChange={(ev) => setValue(ev.target.value)}
        >
          <option value="motorcycle">Motorcycle</option>
          <option value="car">Car</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Plate</Form.Label>
        <Form.Control name="plate" type="text" />
      </Form.Group>
    </Row>
  );
}
