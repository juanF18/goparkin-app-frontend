import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { LogoutRequest } from "../../../services";

/**
 * Funcion que nos retorna el navbar con sus respectivas opciones
 *
 * @returns Componente de Navbar
 */
export function NavBar() {
  const [type, setType] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  const logout = async () => {
    await LogoutRequest();
    if (pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  const onLogout = () => {
    logout();
  };

  useEffect(() => {
    console.log(localStorage.getItem("typeUser"));
    setType(localStorage.getItem("typeUser"));
  });

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            GoParking
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={isCurrentPage("/")}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/roles">
              Roles
            </Nav.Link>
            <Nav.Link as={Link} to="/reservations">
              Reservations
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            {type === ("user" || "owner" || "admin") ? (
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" active={isCurrentPage("/login")}>
                Sign in
              </Nav.Link>
            )}
            <Nav.Link
              as={Link}
              to="/register"
              active={isCurrentPage("/register")}
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
