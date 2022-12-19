import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
//import { FaEye, FaEyeSlash } from "react-icons/fa";
import { initalValuesLogin, validationSchemaLogin } from "./LoginForm.data";
//import { LoginRequest } from "../../../services";
import "./PermissionsAdminForm.css";

export function PermissionsAdminForm() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initalValuesLogin(),
        validationSchema: validationSchemaLogin(),
        validateOnChange: false,
        onSubmit: async (formValues) => {
          try {
            await LoginRequest(formValues.email, formValues.password);
            navigate("/");
          } catch (error) {
            alert(error + "Error al iniciar sesion");
          }
        },
      });

      return (
        <Form onSubmit={formik.handleSubmit}>
            <h2 className="title-login">Permissions Management</h2>

            <Form.Group as={Col}>
                <Form.Label>Select Role</Form.Label>
                <Form.Select>
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                    <option value="Client">Client</option>
                </Form.Select>
            </Form.Group>

            <div className="list-permission">
                <Table style={{ textAlign: "center" }} striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Create</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Parking</td>
                            <td>cb1</td>
                            <td>cb2</td>
                            <td>cb3</td>
                            <td>cb4</td>                        
                        </tr>
                        <tr>
                            <td>Vehicle</td>
                            <td>cb1</td>
                            <td>cb2</td>
                            <td>cb3</td>
                            <td>cb4</td>                        
                        </tr>
                        <tr>
                            <td>Reservation</td>
                            <td>cb1</td>
                            <td>cb2</td>
                            <td>cb3</td>
                            <td>cb4</td>                        
                        </tr>
                        <tr>
                            <td>Client</td>
                            <td>cb1</td>
                            <td>cb2</td>
                            <td>cb3</td>
                            <td>cb4</td>                        
                        </tr>
                    </tbody>
                </Table>
            </div>

            <Button className="btn-PermissionsAdmin" variant="success" type="submit">
                Save
            </Button>

            <Button className="btn-PermissionsAdmin" variant="danger" type="submit">
                Cancel
            </Button>
            
            
        </Form>

      );


}