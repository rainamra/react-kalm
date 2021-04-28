import React from "react";
import { Row, Col, Container, Carousel, Image } from "react-bootstrap";
import './Featured.css';

function Featured_Corousel() {
  return (
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
  );
}


function Featured_FriendSound() {
  return (
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
  );
}

export { Featured_Corousel, Featured_FriendSound};
