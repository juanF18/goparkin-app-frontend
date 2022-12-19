import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { initialValuesVehicle, validationSchemaVehicle } from "./VehicleForm.data";

export function VehicleForm() {
  const [value, setValue] = useState("");

  return (
    <Row>
      <h3>Add a vehicle</h3>

      {/* Type */}
      <Form.Group className="col-md-3" controlId="formBasicType">
        <Form.Label>Type *</Form.Label>
        <Form.Select
          value={value}
          name="typeVehicle"
          onChange={(ev) => setValue(ev.target.value)}>
          <option value="motorcycle">Motorcycle</option>
          <option value="car">Car</option>
        </Form.Select>
      </Form.Group>

      {/* Plate */}
      <Form.Group className="col-md-3" controlId="formBasicPlate">
        <Form.Label>Plate *</Form.Label>
        <Form.Control
          name="plate"
          type="plate"
          placeholder="Enter plate"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.plate}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.plate}
        </Form.Control.Feedback>
      </Form.Group>

    </Row>
  );
}
