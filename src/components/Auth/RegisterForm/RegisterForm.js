import React, { useState } from "react";
import "./RegisterForm.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ParkingForm, VehicleForm } from "../../Forms";
import { useFormik } from "formik";
import { initialValuesRegister, validationRegister } from "./RegisterForm.data";
import { storeRegister, storeVehicle, storeParking } from "../../../services";
import { Link, useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [ownerOrUser, setOwnerOrUser] = useState(false);
  const [openDays, setOpenDays] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [idPeople, setIdPeople] = useState(null);
  const navigate = useNavigate();

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

    onSubmit: async (values) => {
      let id_rol = ownerOrUser ? 2 : 1;

      if (ownerOrUser == true) {
        // Registro de un usuario y su parqueadero

        // Se obtienen los valores del mapa
        values.parking.open_days = openDays;

        values.parkingSpace = {
          spaces_car: values.parkingSpace.spaces_car,
          spaces_motorcycle: values.parkingSpace.spaces_motorcycle,
          available_spaces_car: values.parkingSpace.spaces_car,
          available_spaces_motorcycle: values.parkingSpace.spaces_motorcycle,
        };

        values.address = {
          adress: address,
          city: city,
          department: department,
          latitude: coordinates[0],
          longitude: coordinates[1],
        };

        // Se obtienen los valores del documento
        // ??? falta
        values.document = {
          url: "url",
          comment: "Comentario",
          status: "Status",
        };

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
              /*
                Modifica el id_people del parqueadero para actualizar
                el usuario ya registrado
              */
              values.parking.id_people = res.data.id;
              try {
                await storeParking(
                  values.parking,
                  values.address,
                  values.parkingSpace,
                  values.document
                )
                  .then((res) => {
                    alert("Registration completed, check your email");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } catch {}
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          alert(`${error} - Error al registrar usuario`);
        }
      } else {
        // Registro de un usuario y su vehículo

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
              try {
                await storeVehicle(
                  res.data.id,
                  values.vehicle.type,
                  values.vehicle.plate
                )
                  .then((res) => {
                    alert("Registration completed, check your email");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } catch {}
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          alert(`${error} - Error al registrar usuario`);
        }
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
        <Row className="col-md">
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
          <Form.Group className="col-md" controlId="formBasicConfirmPassword">
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
        <Row className="submitBtn mb-3 mg-2">
          <Button variant="success" type="submit">
            Register
          </Button>
        </Row>
      </Form>

      <br />
    </div>
  );
}
