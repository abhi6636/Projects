import React, { useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/booking/Booking";
import NewsLetter from "./../shared/NewsLetter";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
  } = tour;
  const format = { year: "numeric", month: "long", day: "numeric" };
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //submitting review to server

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    console.log(`reviewtext::${reviewText} rating:: ${tourRating}`);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-1">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        {calculateAvgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not Rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                    </span>
                    <span>
                      <i class="ri-map-pin-user-line"></i> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>₹{price}/per
                      person
                    </span>
                    <span>
                      <i class="ri-road-map-line"></i>
                      {distance}kms
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* tour reviews */}
                <div className="tour__reviews">
                  <h4>Reviews({reviews?.length}reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span
                        onClick={() => {
                          setTourRating(1);
                        }}
                      >
                        <i class="ri-star-fill "></i>
                      </span>
                      <span
                        onClick={() => {
                          setTourRating(2);
                        }}
                      >
                        <i class="ri-star-fill"></i>
                      </span>
                      <span
                        onClick={() => {
                          setTourRating(3);
                        }}
                      >
                        <i class="ri-star-fill"></i>
                      </span>
                      <span
                        onClick={() => {
                          setTourRating(4);
                        }}
                      >
                        <i class="ri-star-fill"></i>
                      </span>
                      <span
                        onClick={() => {
                          setTourRating(5);
                        }}
                      >
                        <i class="ri-star-fill"></i>
                      </span>
                    </div>
                    <div className="review__input">
                      <input
                        type="text"
                        placeholder="Share your thoughts..."
                        ref={reviewMsgRef}
                        required
                      />
                      <button className="btn primary__btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup>
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Random user</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-US",
                                  format
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center ">
                              5<i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing experience</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* tour reviews */}
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetails;
