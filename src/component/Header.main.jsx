import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import './Header.main.css';

function HeaderMain() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}Kalm
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#feedback">Feedback</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Nav className="mr-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
    </Navbar>
    );
}

export default HeaderMain;