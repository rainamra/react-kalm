import React, { useRef, useState } from "react";
import { Form, Col, Row, Button, Container, Alert } from "react-bootstrap";
import './LoginPage.css';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom'

import { GoogleLoginButton } from "react-social-login-buttons";



function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Row className="justify-content-center margin-row">
        <h3>Welcome to {' '} <span className="font-weight-bold">Kalm</span></h3>
      </Row>
      <Row className="mt-2">
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
                </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                  {error && <Alert variant="danger">{error}</Alert>}
                </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                <Button disabled={loading} className="btn-block btn-color rounded-pill" variant="" type="submit">Sign in</Button>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                <Form.Group>
                <h6 className="text-muted text-center pt-3">Or continue with your social account</h6>
                <GoogleLoginButton className="mt-3 rounded-pill" variant="" />
                </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="text-center mt-2">
                <Col>
                  <Link to="/forgot-password">forgot Password?</Link>
                </Col>
                <Col>
                  <Link to="/signup">create an account</Link>
                </Col>
              </Form.Row>
            </Form>
      </Row>
    </Container>
  );
}

export default LoginPage;
