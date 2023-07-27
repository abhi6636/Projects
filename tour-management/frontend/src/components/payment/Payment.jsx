import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import "./payment.css";
import NewsLetter from "./../../shared/NewsLetter";

const Payment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/thank-you");
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1>Make Payment</h1>
              <Button className="btn primary__btn" onClick={handleClick}>
                Paynow!
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Payment;
