import React from "react";
import "../styles/thank-you.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you p-5">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1>Thank You</h1>
              <h3>Your Tour has Booked</h3>
            </div>
            <Button className="btn primary__btn mt-2">
              <Link to="/home">Back to Home</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
