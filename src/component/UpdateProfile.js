import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Row, Image, Col, Container} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }

      const promises = []
      setLoading(true)
      setError("")

      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }

      Promise.all(promises)
        .then(() => {
          history.push("/")
        })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })
    }

    return (
      <>
      <div>
      <Row className="profile p-5 justify-content-lg-center">
        <Col lg="4">
        <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col lg="4">
        <h5>PROFILE</h5>
        <h2>{currentUser.email}</h2>
        <p>2 Night Routines</p>
        </Col>
      </Row>
      <Row className="update-profile justify-content-lg-center">
        <Col lg="8">
        <Card style={{ background: 'transparent', border: 'transparent' }}>
          <Card.Body>
            <h5 className="text-left mb-4">UPDATE PROFILE</h5>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button disabled={loading} className="float-right rounded-pill" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </div>
      </>
    )
  }
