import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import NewsLetter from "./../shared/NewsLetter";

const Login = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="text-center">
              <div className="login__left">
                <img src={loginImg} alt="" />
              </div>
            </Col>
            <Col lg="4" className="text-center">
              <div className="login__right">
                <div className="login__right-top">
                  <h3 className="mt-5">Login</h3>
                </div>
                <div className="login__form"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Login;
