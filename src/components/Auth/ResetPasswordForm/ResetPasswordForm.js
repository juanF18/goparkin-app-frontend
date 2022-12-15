import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./ResetPasswordForm.css";

export function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);
    return (
        <Form>
            <h2 className="title-reset-password">Forgot Password</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email address" />
            </Form.Group>

            <Button className="btn-reset-password" variant="success" type="submit">
                Reset
            </Button>
            <div className="reset-password-options">
                <p>
                    Are you not registered?{" "}
                    <span className="link-register-form">Sign up</span>
                </p>
            </div>
        </Form>
    );
}
