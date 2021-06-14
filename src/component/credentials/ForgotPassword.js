import React, { useState, useRef } from "react";
import { Form, Button, Alert, Row, Col, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import './LoginPage.css';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <>
    <Container>
      <Row className="justify-content-center margin-row">
        <h3>Password Reset</h3>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Row>
              <Col>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}
              </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Button disabled={loading} className="btn-block btn-color rounded-pill" variant="" type="submit">
                  Reset Password
              </Button>
            </Form.Row>
            <Form.Row className="text-center">
              <Col>
              <Link to="/login">Login</Link>
              </Col>
            </Form.Row>
            <Form.Row className="text-center mt-4">
              <Col>
              Need an account?
              </Col>
              <Col>
              <Link to="/signup">Sign Up</Link>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}
