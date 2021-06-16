//by Rainamira Azzahra
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"
import './Header.main.css';
import axios from 'axios';

function HeaderMain() {
    const [error, setError] = useState("");
    const { currentUser, logout }   = useAuth()
    const [username, setUsername] = useState("");
    const history = useHistory()
    const [currentPicture, setCurrentPicture] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogout(){
        setError("")

        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }

    useEffect(() => {
      getUsername()
    }, [])

    async function getUsername() {
      setLoading(true);
      try {
        await axios.get(`api/user/${currentUser.uid}`)
        .then(res => {
          setUsername(res.data.username);
          setCurrentPicture(res.data.imgURL);
        }).then(() => setLoading(false))
      } catch {
        console.log("failed to get user data")
      }
    }

    return (
      <>
          {loading === false ? <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/" className="pl-4">
                <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/kalm-react.appspot.com/o/logo%2FkalmLogo.png?alt=media&token=ee97e84a-5eff-410a-8426-45013825221a"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}Kalm
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="pr-3">
            <Image className="mt-1" width="30px" height="30px"
            src={currentPicture} roundedCircle />
            <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                      Home
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/update-profile">
                      Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/landingPage">Feedback</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar> : null}
      </>
    );
}

export default HeaderMain;