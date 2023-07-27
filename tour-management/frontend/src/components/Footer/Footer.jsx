import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";

const Footer = () => {
  const quick__links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];

  const quick__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="footer__logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                quam consequuntur.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to={"#"}>
                    <i class="ri-youtube-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to={"#"}>
                    <i class="ri-facebook-circle-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to={"#"}>
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to={"#"}>
                    <i class="ri-twitter-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-2-line"></i>
                  </span>
                  Address
                </h6>
                <p className="mb-0">
                  123 street, city, state, country, pin-123456
                </p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 align-items-center gap-2">
                  <span>
                    <i class="ri-mail-send-fill"></i>
                  </span>
                  Email
                </h6>
                <p className="mb-0">
                  <Link to={"#"}>info@wanderlusttravels.com</Link>
                </p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  Phone
                </h6>
                <p className="mb-0">
                  <Link to={"#"}>1234567890</Link>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="pt-5 text-center">
            <p className="copyright">
              Copyright {year} Designed and Developed by Abhinand. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
