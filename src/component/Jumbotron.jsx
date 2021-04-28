import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import './Jumbotron.css';

function Jumbotron() {
  return (
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
  );
}

export default Jumbotron;
