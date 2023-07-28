import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import "./payment.css";
import NewsLetter from "../../shared/NewsLetter";

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
              <div className="payment__body justify-content-between p-3">
                <div>
                  <input type="number" placeholder="Enter Card Number" id="" />
                </div>
                <div>
                  <input type="number" placeholder="CVV" id="" />
                </div>
                <div>
                  <input type="text" placeholder="Expiry" id="" />
                </div>
                <div>
                  <input type="text" placeholder="Enter Name" id="" />
                </div>
                <div>
                  <input type="number" placeholder="Enter Phone Number" id="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="pay__now-btn text-center">
          <Button className="btn primary__btn" onClick={handleClick}>
            Paynow!
          </Button>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default Payment;
