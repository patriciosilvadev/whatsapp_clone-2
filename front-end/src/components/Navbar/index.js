import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './_navbar.sass';

const NavbarPage = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="bggreen"
      >
        <Container fluid="sm">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="flex-mid"
          >
            <Nav>
              <Nav.Link
                href="/home"
                className="text_16 nav_text t-white center-align reg"
              >Home
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="text_16 nav_text t-white center-align reg"
              >Profile
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="text_16 nav_text t-white center-align reg"
              >Social
              </Nav.Link>
              <Nav.Link
                href="/login"
                className="text_16 nav_text t-white center-align reg"
              >Sign In
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="text_16 nav_text t-white center-align reg"
              >Referal
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="nav_text"
              >
                <i className="fas fa-search fa-2x t-white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
