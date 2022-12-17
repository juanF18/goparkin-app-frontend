import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { RegisterMapView } from "../../Map/RegisterMapView";
import "./ParkingForm.css";

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
        <Form.Group>
          <Form.Label>Choose your location</Form.Label>
          <div className="map_register">
            <RegisterMapView />
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Car places</Form.Label>
          <Form.Control name="carPlaces" type="number" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Motorcycle places</Form.Label>
          <Form.Control name="carPlaces" type="number" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Opening Hour</Form.Label>
          <Form.Control name="carPlaces" type="number" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Select>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Closing Hour</Form.Label>
          <Form.Control name="carPlaces" type="number" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Select>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Open days</Form.Label>
          <div key={"inline-checkbox"} className="mb-3">
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
    </>
  );
}
