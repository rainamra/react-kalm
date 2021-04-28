import React from "react";
import { Container, Navbar } from "react-bootstrap";
import './Footer.css';

function Footer() {
  return (
    <div>
      <Navbar className="footer-f" expand="lg">
        <Container className="justify-content-center">
          <p>
            Created by
            <i class="bi bi-suit-heart-fill text-danger"></i>{" "}
            <a href="https://www.instagram.com/rainamra/" class="text-dark fw-bold">
            Rainamira Azzahra {' '}
            </a>
            and {' '}
            <a href="https://www.instagram.com/rainamra/" class="text-dark fw-bold">
            Rayhan Ali
            </a>
          </p>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
