import React, { useState } from "react";
import "./RegisterForm.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ParkingForm, VehicleForm } from "../../Forms";
import { useFormik } from "formik";
import { initialValuesRegister, validationRegister } from "./RegisterForm.data";
import { storeRegister } from "../../../services";
import { storeVehicle } from "../../../services";
//import { storeRegister } from "../../../services";

export function RegisterForm() {
  const [ownerOrUser, setOwnerOrUser] = useState(false);
  const [openDays, setOpenDays] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [coordinates, setCoordinates] = useState([]);
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
    onSubmit:
      ownerOrUser == true
        ? (values) => {
            let id_rol = "";

            if (ownerOrUser) {
              // Owner
              id_rol = "2";
            } else {
              // User
              id_rol = "1";
            }
            if (ownerOrUser == true) {
              console.log("entre a dueño");
              values.parking.open_days = openDays;
              values.address = {
                adress: address,
                city: city,
                department: department,
                latitude: coordinates[0],
                longitude: coordinates[1],
              };

              console.log(values);
            }
          }
        : async (values) => {
            let id_rol = "";

            if (ownerOrUser) {
              // Owner
              id_rol = "2";
            } else {
              // User
              id_rol = "1";
            }
            try {
              await storeRegister(
                id_rol,
                values.name,
                values.last_name,
                values.phone,
                values.email,
                values.password
              )
                .then(async (res) => {
                  setIdPeople(await res.data.id);
                  await storeVehicle(
                    idPeople,
                    values.vehicle.plate,
                    values.vehicle.type
                  )
                    .then((res) => {
                      console.log("Se guardo el vehiculo");
                      console.log(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                });
            } catch (error) {
              console.log(error);
            }
          },
  });

  return (
    <div className="container_register_form">
      <div className="header-register">
        <h1>Register</h1>

        {/* Check Owner or User */}
        <Form.Check
          className="switch-owner"
          type="switch"
          id="custom-switch"
          label="Are you the parking owner?"
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

          {/* Confirm Password */}
          <Form.Group className="col-md-4" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password *</Form.Label>
            <Form.Control
              name="confirm_password"
              type="password"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        {ownerOrUser ? (
          <ParkingForm
            errors={formik.errors}
            handleChange={formik.handleChange}
            openDaysState={{ openDays, setOpenDays }}
            addressState={{ address, setAddress }}
            departmentState={{ department, setDepartment }}
            cityState={{ city, setCity }}
            coordinatesState={{ coordinates, setCoordinates }}
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

      <br />
    </div>
  );
}
