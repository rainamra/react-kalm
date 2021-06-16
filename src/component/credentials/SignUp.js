//by Rainamira Azzahra
import React, { useRef, useState } from "react";
import { Form, Col, Row, Button, InputGroup, Alert } from "react-bootstrap";
import "./LoginPage.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, username, firstname + " " + lastname);
      history.push("/")
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  

  return (
    <>
      <Row className="justify-content-center margin-row">
        <h3>Create an account</h3>
      </Row>
      <Row className="mt-2">
        <Form className="signup-form" onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} aria-describedby="inputGroupPrepend" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" ref={passwordConfirmRef} required />
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
              <Button disabled={loading} className="btn-block btn-color rounded-pill" variant="" type="submit">
                Sign up
              </Button>
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
              <Link to="/login">Log in</Link>
            </Col>
          </Form.Row>
        </Form>
      </Row>
    </>
  )
}
