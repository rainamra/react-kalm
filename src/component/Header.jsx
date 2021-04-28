import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import './Header.css';


function Header() {
  return (
    <Navbar collapseOnSelect bg="transparent" expand="lg" variant="" fixed="top">
      <Navbar.Brand className="text-p" href="#home">
        <img src="logo" alt="" width="30" height="30" className="d-inline-block align-top"/> Kalm
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-p" href="#features">Features</Nav.Link>
          <Nav.Link className="text-p" href="#contact">Contact us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="text-p" href="#already">Already have access?</Nav.Link>
          <Nav.Link className="text-p" eventKey={2} href="#signUp">
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
