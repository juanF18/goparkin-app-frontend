import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { intialValuesResetPassword, validationSchema } from "./Reset.data";
import { ForgotPasswordRequest } from "../../../services";
import "./ResetPasswordForm.css";

export function ResetPasswordForm() {
  const formik = useFormik({
    initialValues: intialValuesResetPassword(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await ForgotPasswordRequest(formValue.email)
          .then((res) => {
            console.log(res.data.status);
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
    <Form onSubmit={formik.handleSubmit}>
      <h2 className="title-reset-password">Forgot Password</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email address"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="btn-reset-password" variant="success" type="submit">
        Reset
      </Button>
      <div className="reset-password-options">
        <p>
          Are you not registered?{" "}
          <span className="link-register-form">
            <a
              style={{ color: "black" }}
              as={Link}
              to="/register"
              href="/register"
            >
              Sign up
            </a>
          </span>
        </p>
      </div>
    </Form>
  );
}
