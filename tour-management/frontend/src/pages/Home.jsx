import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import Searchbar from "../shared/Searchbar";
import ServicesList from "../services/ServicesList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import ImagesGallery from "../components/image-gallery/ImagesGallery";
import Testimonial from "../components/testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      {/* hero content */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know before you GO..!!!"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1 className="">
                  Travelling Opens the door to{" "}
                  <span className="highlight">Memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias cum unde hic quam laborum illo amet qui, atque non
                  repudiandae labore nam quidem reiciendis ea ullam, minus
                  cumque tempora ipsa.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} loop autoPlay muted />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Searchbar />
          </Row>
        </Container>
      </section>
      {/* services */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle"> What we Serve</h5>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* services */}

      {/*Featured tour section*/}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* featured tour end */}

      {/* user experince */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all experience <br />
                  we serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt saepe enim sint inventore sit optio voluptatibus.
                  Nihil iste est dolorum voluptatum alias officia eveniet velit
                  distinctio earum, sapiente quam accusantium.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Happy Clients</h6>
                </div>
                <div className="counter__box">
                  <span>10K+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>5+</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* user experience */}

      {/* gallery */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit Our Tour Gallery</h2>
            </Col>
            <Col lg="12">
              <ImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery */}

      {/* testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonial"} />
              <h2 className="testimonial__title">
                What our customers say about us!
              </h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial */}
      <NewsLetter />
      {/* hero content end */}
    </>
  );
};

export default Home;
