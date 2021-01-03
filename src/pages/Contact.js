import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h5>Kontaktinė informacij</h5>
            <p>
              <b>Adresas</b>
            </p>
            <a
              href="https://www.google.com/maps/dir/54.68819,25.2626316//@54.6877144,25.2610432,16.75z/data=!4m2!4m1!3e2"
              target="_blank"
              rel="noreferrer"
            >
              J. Jasinskio g., Vilnius 03163
            </a>
            <p>
              <b>Tel. numeris</b>
            </p>
            <p>+370 645 43291</p>
            <p>
              <b>El. paštas</b>
            </p>
            <p>human@website.com</p>
          </Col>
          <Col md={6}>
            <img src="/map.png" alt="location"></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
