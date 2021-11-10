import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../lh.png";
import { Navbar, Nav, Container } from "react-bootstrap";


class Navbarclass extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img
              width="100px"
              className="d-inline-block align-top"
              src={logo}
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navbarwords">
              <Nav.Link className="navbarwords" href="/projects">
                PROJECTS
              </Nav.Link>
              <Nav.Link className="navbarwords" href="/words">
                WORDS
              </Nav.Link>
              <Nav.Link className="navbarwords" href="/sounds">
                SOUNDS
              </Nav.Link>
              <Nav.Link
                className="navbarwords"
                href="https://vsco.co/liamhil/gallery"
                target="_blank"
              >
                SIGHTS
              </Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navbarclass;
