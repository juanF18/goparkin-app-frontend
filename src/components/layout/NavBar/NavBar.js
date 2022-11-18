import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">GoParkin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link>Sign in</Nav.Link>
            <Nav.Link>Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
