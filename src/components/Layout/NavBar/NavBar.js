import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

/**
 * Funcion que nos retorna el navbar con sus respectivas opciones
 *
 * @returns Componente de Navbar
 */
export function NavBar() {
  const { pathname } = useLocation();

  const isCurrentPage = (route) => {
    return route === pathname;
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">GoParkin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={isCurrentPage("/")}>
              Home
            </Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link as={Link} to="/login" active={isCurrentPage("/login")}>
              Sign in
            </Nav.Link>
            <Nav.Link>Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
