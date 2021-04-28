import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Container, InputGroup } from "react-bootstrap";
import './LoginPage.css';

function SignUp() {
    return (
        <Container>
        <Row className="justify-content-center margin-row">
          <h3>Create an account</h3>
        </Row>
        <Row className="mt-2">
              <Form className="signup-form">
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                            <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            />
                        </InputGroup>
                    </Form.Group>
                    </Col>
                </Form.Row>
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
                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
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
                  <Button className="btn-block btn-color rounded-pill" variant="" type="submit">Sign up</Button>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                  <Form.Group>
                  <h6 className="text-muted text-center pt-3">Or continue with your social account</h6>
                  </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row className="mt-2">
                  <Col className="text-right">
                    <a>Already have an account?</a>
                  </Col>
                  <Col className="text-left">
                    <a href="#link2" action>Log in</a>
                  </Col>
                </Form.Row>
              </Form>
        </Row>
      </Container>
    );
}

export default SignUp;
