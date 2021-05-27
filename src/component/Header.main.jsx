import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"
import './Header.main.css';

function HeaderMain() {
    const [error, setError] = useState("");
    const { currentUser, logout }   = useAuth()
    const history = useHistory()


    async function handleLogout(){
        setError("")

        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
    <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="/">
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}Kalm
        </Navbar.Brand>
        <Nav>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav>
        <NavDropdown title={currentUser.email} id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to="/update-profile" className="link">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Feedback</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default HeaderMain;