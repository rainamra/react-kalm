import React from "react";
import { Container, Nav, Navbar,Button, Row, Col,  Carousel, Image,Form, ListGroup, Card } from "react-bootstrap";
import './LandingPage.css';


function LandingPage() {
  return (
    <>
  <Navbar collapseOnSelect bg="transparent" expand="lg" variant="" fixed="top">
      <Navbar.Brand className="text-p" href="#home">
        <img src="https://firebasestorage.googleapis.com/v0/b/kalm-react.appspot.com/o/logo%2FkalmLogo.png?alt=media&token=ee97e84a-5eff-410a-8426-45013825221a" 
        alt="" width="30" height="30" className="d-inline-block align-top"/> Kalm
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-p" href="#features">Features</Nav.Link>
          <Nav.Link className="text-p" href="#contact">Contact us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="text-p" href="#already">Already have access?</Nav.Link>
          <Nav.Link className="text-p" eventKey={2} href="#signUp">
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="jumb">
        <Container>
        <svg className="overlay" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1">
          <circle cx="50%" cy="40%" r="200" fill="url(#gradient1)"/>
        </svg>
          <Row className="front justify-content-center">
            <h1>Experience delightful night routine</h1>
            <p>Combine organization and relaxation into your night
              routine to ensure serene and unbroken sleep.</p>
          </Row>
          <Row className="front text-center">
            <Col>
              <p>
                <Button variant="custom" className="rounded-pill">Sign up now</Button>
              </p>
            </Col>
            <Col>
              <p>
                <Button variant="outline-light" className="rounded-pill" >See how it works</Button>
              </p>
            </Col>
          </Row>
        </Container>
        <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" 
        class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="0%" 
        stop-color="#09203fff"></stop><stop offset="100%" stop-color="#537895ff"></stop></linearGradient></defs><path 
        d="M 0,400 C 0,400 0,200 0,200 C 71.42893961708394,184.91531664212076 142.85787923416788,169.83063328424151 197,169 
        C 251.14212076583212,168.16936671575849 287.9974226804124,181.59278350515467 339,202 C 390.0025773195876,222.40721649484533 
        455.15243004418255,249.79823269513992 513,256 C 570.8475699558174,262.2017673048601 621.3928571428572,247.21428571428572 691,227 
        C 760.6071428571428,206.78571428571428 849.2761413843888,181.34462444771722 916,172 C 982.7238586156112,162.65537555228278 1027.5025773195878,
        169.40721649484533 1079,195 C 1130.4974226804122,220.59278350515467 1188.713549337261,265.0265095729014 1250,269 C 1311.286450662739,272.9734904270986 
        1375.6432253313696,236.4867452135493 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all 
        duration-300 ease-in-out delay-150"></path></svg>
      </div>
      <div id="features" className="virtual">
      <Container>
        <Row md={2}>
        <Col>
        <h1 class="text-white p-5">Various Types of Calming Visual</h1>
        </Col>
        </Row>
        <Row>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Row>
      </Container>
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stop-color="#fff1ebff"></stop>
            <stop offset="100%" stop-color="#ace0f9ff"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,200 0,200 C 134.78571428571428,196.10714285714286 269.57142857142856,192.21428571428572 402,209 C 534.4285714285714,225.78571428571428 
        664.4999999999999,263.25 779,259 C 893.5000000000001,254.75 992.4285714285716,208.78571428571428 1100,192 C 1207.5714285714284,175.21428571428572 1323.7857142857142,
        187.60714285714286 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient1)" class="transition-all duration-300 ease-in-out delay-150">
        </path>
      </svg>
    </div>
    <div className="friend-sound">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1>Background Sound</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mi, aliquet egestas magna 
                tellus massa posuere et. </p>
          </Col>
          <Col>
          <Image src="https://images.unsplash.com/photo-1492284163710-4eef97892705?ixid=MXwxMjA3fDB8MHxwaG90by
          1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" rounded height="250" width="400" alt="backgroundSound"/>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-5 mb-5">
          <Col>
          <Image src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=
          MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" rounded height="250" width="400" alt="friendStatus"/>
          </Col>
          <Col>
          <h1>Friend Status</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tortor mi, aliquet egestas magna tellus massa posuere et. </p>
          </Col>
        </Row>
      </Container>
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#fff1ebff"></stop><stop offset="95%" stop-color="#ace0f9ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 58.96392992098933,201.63105462040537 117.92785984197866,203.26210924081073 188,193 C 258.07214015802134,182.73789075918927 339.2524905530746,160.5826176571625 407,178 C 474.7475094469254,195.4173823428375 529.0621779457231,252.40742013053932 594,262 C 658.9378220542769,271.5925798694607 734.4987976640331,233.7877018206802 808,199 C 881.5012023359669,164.2122981793198 952.9426313981448,132.44177258673997 1020,143 C 1087.0573686018552,153.55822741326003 1149.730676743387,206.44520783236004 1219,223 C 1288.269323256613,239.55479216763996 1364.1346616283065,219.77739608381998 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
    </div>
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
    </>
  );
}

export default LandingPage;