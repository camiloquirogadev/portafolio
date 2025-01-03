import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../header2.css";

function Header() {
  return (
    <header className="mb-3 header-bg-color">
      {/* Navbar principal */}
      <Navbar expand="lg" className="border-bottom">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="/path-to-logo.png" alt="Logo de la tienda" className="header-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
              {/* Enlace extra opcional */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success" aria-label="Buscar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Segunda barra de navegación */}
      <div className="container-fluid second-header-border">
        <div className="d-flex justify-content-between align-items-center">
          {/* Categorías de productos */}
          <Nav className="d-flex" activeKey="/home">
            <Nav.Item className="ms-4 text-size">
              <Nav.Link href="/home" className="font-weight-bold">Jeans</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-4 text-size">
              <Nav.Link eventKey="link-1" className="font-weight-bold">Shorts</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-4 text-size">
              <Nav.Link eventKey="link-2" className="font-weight-bold">Camperas</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-4 text-size">
              <Nav.Link eventKey="link-3" className="font-weight-bold">Ofertas</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Íconos de usuario */}
          <Nav className="d-flex">
            <Button className="me-3 border-none" variant="outline-secondary" aria-label="Perfil">
              <FontAwesomeIcon icon={faUser} />
            </Button>
            <Button className="me-3 border-none" variant="outline-secondary" aria-label="Favoritos">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button className="me-3 border-none" variant="outline-secondary" aria-label="Carrito">
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
