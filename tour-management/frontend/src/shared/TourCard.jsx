import React from "react";
import "./tour-card.css";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <div className="tour-card">
      <Card>
        <div className="tour__img">
          <Link to={`/tours/${id}`}>
            <img src={photo} alt="tourIMG" />
          </Link>
          {featured && <span>Featured</span>}
        </div>
      </Card>
      <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
            <i class="ri-map-pin-line"></i>
            {city}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not Rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="tour__title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>
      </CardBody>
      <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
        <h5>
          <i class="ri-price-tag-3-fill"></i>₹{price}
        </h5>
        <p>
          /<i class="ri-user-line">per person</i>
        </p>
        <button className="btn booking__btn">
          <Link to={`/tours/${id}`}>Book Now!</Link>
        </button>
      </div>
    </div>
  );
};

export default TourCard;
