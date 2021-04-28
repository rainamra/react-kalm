import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import './LoginPage.css';

import { GoogleLoginButton } from "react-social-login-buttons";


function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-center margin-row">
        <h3>Welcome to {' '} <span className="font-weight-bold">Kalm</span></h3>
      </Row>
      <Row className="mt-2">
            <Form className="login-form">
              <Form.Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
                <Button className="btn-block btn-color rounded-pill" variant="" type="submit">Sign in</Button>
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
                  <a href="#link2" action>forgot password</a>
                </Col>
                <Col>
                  <a href="#link2" action>create an account</a>
                </Col>
              </Form.Row>
            </Form>
      </Row>
    </Container>
  );
}

export default LoginPage;
