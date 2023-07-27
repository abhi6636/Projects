import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to get Useful Travel Information</h2>
            </div>
            <div className="newsletter__input">
              <input type="email" placeholder="Enter Your Email" />
              <button className="btn newsletter__btn">Subscribe</button>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              hic voluptas dignissimos quisquam. Atque facilis corporis,
              doloremque delectus necessitatibus cumque excepturi eos,
              perferendis dolore voluptatem, consectetur illo earum harum quos.
            </p>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
