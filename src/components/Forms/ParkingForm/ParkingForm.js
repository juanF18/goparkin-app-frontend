import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { RegisterMapView } from "../../Map/RegisterMapView";
import "./ParkingForm.css";

export function ParkingForm(props) {
  const {
    errors,
    handleChange,
    openDaysState,
    addressState,
    departmentState,
    coordinatesState,
    cityState,
  } = props;

  //console.log(openDaysState.openDays);
  const handleDays = (event) => {
    if (openDaysState.setOpenDays) {
      openDaysState.setOpenDays((day) =>
        day === "" ? day + event.target.value : day + `,${event.target.value}`
      );
    }
  };

  return (
    <>
      {/* Sector de nombre de parqueadero */}
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Parking name *</Form.Label>
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
          <Form.Label>Hour Price Car *</Form.Label>
          <Form.Control
            name="parking.hour_price_car"
            type="number"
            onChange={handleChange}
            isInvalid={errors.parking ? !!errors.parking.hour_price_car : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.hour_price_car : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Hour Price Motorcycle *</Form.Label>
          <Form.Control
            name="parking.hour_price_motorcycle"
            type="number"
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
          <Form.Label>Opening Hour (24 Hours) *</Form.Label>
          <Form.Control
            name="parking.opening_hour"
            type="time"
            onChange={handleChange}
            isInvalid={errors.parking ? !!errors.parking.opening_hour : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parking ? errors.parking.opening_hour : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Closing Hour (24 Hours) *</Form.Label>
          <Form.Control
            name="parking.closing_hour"
            type="time"
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
          <Form.Label>Open days *</Form.Label>
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
              onChange={handleDays}
            />
            <Form.Check
              inline
              name="Tuesday"
              label="Tuesday"
              value={"Tuesday"}
              type="checkbox"
              onChange={handleDays}
            />
            <Form.Check
              inline
              name="Wednesday"
              label="Wednesday"
              value={"Wednesday"}
              type="checkbox"
              onChange={handleDays}
            />
            <Form.Check
              inline
              name="Thrusday"
              label="Thrusday"
              value={"Thrusday"}
              type="checkbox"
              onChange={handleDays}
            />
            <Form.Check
              inline
              name="Friday"
              label="Friday"
              value={"Friday"}
              type="checkbox"
              onChange={handleDays}
            />
            <Form.Check
              inline
              name="Saturday"
              label="Satuday"
              value={"Satuday"}
              type="checkbox"
              onChange={handleDays}
            />
            <Form.Check
              inline
              name="Sunday"
              label="Sunday"
              value={"Sunday"}
              type="checkbox"
              onChange={handleDays}
            />
          </div>
        </Form.Group>
      </Row>
      {/* Sector de direccion */}
      <Row className="mb-3">
        {/*
        <Form.Group as={Col}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address.adress"
            type="text"
            defaultValue={""}
            onChange={handleChange}
            //isInvalid={errors.address ? !!errors.address.adress : ""}
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
            defaultValue={""}
            onChange={handleChange}
            //isInvalid={errors.address ? !!errors.address.department : ""}
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
            defaultValue={""}
            onChange={handleChange}
            //isInvalid={errors.address ? !!errors.address.city : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.city : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            defaultValue={""}
            name="address.latitude"
            text="text"
            onChange={handleChange}

            //isInvalid={errors.address ? !!errors.address.latitude : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.latitude : ""}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            defaultValue={""}
            name="address.logitude"
            text="text"
            onChange={handleChange}

            //isInvalid={errors.address ? !!errors.address.longitude : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address ? errors.address.longitude : ""}
          </Form.Control.Feedback>
        </Form.Group>
          */}
        <Form.Group>
          <Form.Label>Choose your location</Form.Label>
          <div className="map_register">
            <RegisterMapView
              setAddress={addressState.setAddress}
              setDepartment={departmentState.setDepartment}
              setCity={cityState.setCity}
              setCoordinates={coordinatesState.setCoordinates}
            />
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Car places *</Form.Label>
          <Form.Control
            name="parkingSpace.spaces_car"
            type="number"
            onChange={handleChange}
            isInvalid={
              errors.parkingSpace ? !!errors.parkingSpace.spaces_car : ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors.parkingSpace ? errors.parkingSpace.spaces_car : ""}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Motorcycle places *</Form.Label>
          <Form.Control
            name="parkingSpace.spaces_motorcycle"
            type="number"
            onChange={handleChange}
            isInvalid={
              errors.parkingSpace ? !!errors.parkingSpace.spaces_motorcycle : ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors.parkingSpace ? errors.parkingSpace.spaces_motorcycle : ""}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </>
  );
}
