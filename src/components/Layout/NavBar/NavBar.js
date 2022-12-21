import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { LogoutRequest } from "../../../services";
import { UserValues } from "./UserValues";

/**
 * Funcion que nos retorna el navbar con sus respectivas opciones
 *
 * @returns Componente de Navbar
 */
export function NavBar() {
  const [type, setType] = useState(UserValues());
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
  const user = () => {
    if (type.rol.name == "owner") {
      return (
        <>
          <Nav.Link as={Link} to="/roles">
            Roles
          </Nav.Link>
          <Nav.Link as={Link} to="/reservations">
            Reservations
          </Nav.Link>
        </>
      );
    }
  };

  useEffect(() => {
    if (localStorage.getItem("typeUser")) {
      setType(JSON.parse(localStorage.getItem("typeUser")));
    }
    return () => {};
  }, []);

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
            {user()}
          </Nav>
          <Nav className="d-flex">
            {type.rol.name === ("user" || "owner" || "admin") ? (
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  active={isCurrentPage("/login")}
                >
                  Sign in
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  active={isCurrentPage("/register")}
                >
                  Sign up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
