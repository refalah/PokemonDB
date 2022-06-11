import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router";

const Navbars = () => {
  const router = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => router("/")}>PokemonDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => router("/")}>Pokemon List</Nav.Link>
            <Nav.Link onClick={() => router("/my-pokemon")}>
              My Pokemon
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
