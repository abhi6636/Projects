import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour }) => {
  const [credentials, setCredentials] = useState({
    fullname: "",
    phone: "",
    userId: "01",
    userEmail: "user@mail.com",
    guestSize: 1,
    bookingDate: "",
  });

  const navigate = useNavigate();

  const handleOnchange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  const { price } = tour;
  const serviceFee = Number(credentials.guestSize) * 500;
  const totalCost = Number(price) * Number(credentials.guestSize);
  const gst = Number(((totalCost * 18) / 100).toFixed(2));
  const total = Number(totalCost + serviceFee + gst).toFixed(2);

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ₹{price} <span>/per person</span>
        </h3>
      </div>
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              onChange={handleOnchange}
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              onChange={handleOnchange}
              required
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookingDate"
              onChange={handleOnchange}
              required
            />
            <input
              type="number"
              placeholder="Guests?"
              id="guestSize"
              onChange={handleOnchange}
              required
            />
          </FormGroup>
        </Form>
      </div>
      {/* booking bottom */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-3">
              ₹{price}
              <i class="ri-close-line">{credentials.guestSize} person</i>
            </h5>
            <span>₹{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>GST</h5>
            <span>{gst}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>{total}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
