import React from "react";
import { Row, Col, Container, Form, Button, ListGroup, Card } from "react-bootstrap";
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-f">
      <Container className="mb-5">
        <Row className="justify-content-center">
          <h1 class="text-black">Contact us</h1>
        </Row>
        <Row>
          <Col className="mt-2">
            <Card className="text-center">
              <Card.Body> <h5 class="card-title">Contact us</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cumque eum omnis magni sit modi libero!</p></Card.Body>
            </Card>
            <ListGroup className="mt-5">
              <ListGroup.Item>
                <h4>Other link</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#link2" action>
                  Github
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#link2" action>
                  YouTube
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter fullname" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-white">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button className="rounded-pill" variant="outline-light" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stop-color="#fff1ebff"></stop>
            <stop offset="100%" stop-color="#ace0f9ff"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,200 0,200 C 86.6974358974359,176.0205128205128 173.3948717948718,152.04102564102564 244,157
          C 314.6051282051282,161.95897435897436 369.1179487179487,195.85641025641027 450,222 C 530.8820512820513,248.14358974358973 638.1333333333333,
          266.5333333333333 733,244 C 827.8666666666667,221.4666666666667 910.3487179487179,158.01025641025643 995,150 C 1079.6512820512821,141.98974358974357
          1166.4717948717948,189.42564102564103 1241,207 C 1315.5282051282052,224.57435897435897 1377.7641025641026,212.2871794871795 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none" stroke-width="0" fill="url(#gradient1)" class="transition-all duration-300 ease-in-out delay-150">
        </path>
      </svg>
    </div>
  );
}

export default Contact;
