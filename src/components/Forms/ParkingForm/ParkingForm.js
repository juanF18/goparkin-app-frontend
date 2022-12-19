import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { RegisterMapView } from "../../Map/RegisterMapView";
import "./ParkingForm.css";

export function ParkingForm({ errors, handleChange }) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  return (
    <>
      {/* Sector de nombre de parqueader */}
      <Row className="mb-3">
        <h3>Add a parking</h3>
        <Form.Group as={Col}>
          <Form.Label>Parking name</Form.Label>
          <Form.Control
            type="text"
            name="parking.parking_name"
            onChange={handleChange}
            isInvalid={errors.parking ? !!errors.parking.parking_name : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.parking_name : ""}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Hour Price Car</Form.Label>
          <Form.Control
            name="parking.hour_price_car"
            type="text"
            onChange={handleChange}
            isInvalid={errors.parking ? !!errors.parking.hour_price_car : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.hour_price_car : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Hour Price Motorcycle</Form.Label>
          <Form.Control
            name="parking.hour_price_motorcyle"
            type="text"
            onChange={handleChange}
            isInvalid={
              errors.parking ? !!errors.parking.hour_price_motorcycle : ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.hour_price_motorcycle : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Opening Hour (24 Hours) </Form.Label>
          <Form.Control
            name="parking.opening_hour"
            text="number"
            onChange={handleChange}
            isInvalid={errors.parking ? !!errors.parking.opening_hour : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.opening_hour : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Closing Hour (24 Hours)</Form.Label>
          <Form.Control
            name="parking.closing_hour"
            text="number"
            onChange={handleChange}
            isInvalid={errors.parking ? !!errors.parking.closing_hour : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.closing_hour : ""}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col}>
          <Form.Label>Open days</Form.Label>
          <div
            name="parking.open_days"
            key={"inline-checkbox"}
            className="mb-3"
          >
            <Form.Check
              inline
              name="Monday"
              label="Monday"
              value={"Monday"}
              type="checkbox"
            />
            <Form.Check
              inline
              name="Tuesday"
              label="Tuesday"
              value={"Tuesday"}
              type="checkbox"
            />
            <Form.Check
              inline
              name="Wednesday"
              label="Wednesday"
              value={"Wednesday"}
              type="checkbox"
            />
            <Form.Check
              inline
              name="Thrusday"
              label="Thrusday"
              value={"Thrusday"}
              type="checkbox"
            />
            <Form.Check
              inline
              name="Friday"
              label="Friday"
              value={"Friday"}
              type="checkbox"
            />
            <Form.Check
              inline
              name="Saturday"
              label="Satuday"
              value={"Satuday"}
              type="checkbox"
            />
            <Form.Check
              inline
              name="Sunday"
              label="Sunday"
              value={"Sunday"}
              type="checkbox"
            />
          </div>
        </Form.Group>
      </Row>
      {/* Sector de direccion */}
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address.adress"
            type="text"
            value={address}
            onChange={handleChange}
            isInvalid={errors.address ? !!errors.address.adress : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.adress : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Department</Form.Label>
          <Form.Control
            name="address.department"
            type="text"
            value={department}
            onChange={handleChange}
            isInvalid={errors.address ? !!errors.address.department : ""}
            disabled
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.department : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            name="address.city"
            type="text"
            value={city}
            onChange={handleChange}
            isInvalid={errors.address ? !!errors.address.city : ""}
            disabled
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.city : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            defaultValue={""}
            value={coordinates.length != 0 ? coordinates[0] : ""}
            name="address.latitude"
            text="text"
            onChange={handleChange}
            isInvalid={errors.address ? !!errors.address.latitude : ""}
            disabled
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.latitude : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            defaultValue={""}
            value={coordinates.length != 0 ? coordinates[1] : ""}
            name="address.logitude"
            text="text"
            onChange={handleChange}
            isInvalid={errors.address ? !!errors.address.longitude : ""}
            disabled
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.longitude : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose your location</Form.Label>
          <div className="map_register">
            <RegisterMapView
              setAddress={setAddress}
              setDepartment={setDepartment}
              setCity={setCity}
              setCoordinates={setCoordinates}
            />
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Car places</Form.Label>
          <Form.Control
            name="parkingSpaces.spaces_car"
            type="number"
            onChange={handleChange}
            isInvalid={
              errors.parkingSpaces ? !!errors.parkingSpaces.spaces_car : ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors.parkingSpaces ? errors.parkingSpaces.spaces_car : ""}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Motorcycle places</Form.Label>
          <Form.Control
            name="parkingSpaces.spaces_motorcycle"
            type="number"
            onChange={handleChange}
            isInvalid={
              errors.parkingSpaces
                ? !!errors.parkingSpaces.spaces_motorcycle
                : ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors.parkingSpaces ? errors.parkingSpaces.spaces_motorcycle : ""}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </>
  );
}
