import React from "react";
import Slider from "react-slick";
import avatar01 from "../../assets/images/ava-1.jpg";
import avatar02 from "../../assets/images/ava-2.jpg";
import avatar03 from "../../assets/images/ava-3.jpg";
import avatar04 from "../../assets/images/ava-4.png";
import avatar05 from "../../assets/images/ava-5.webp";
import avatar06 from "../../assets/images/ava-6.png";
import avatar07 from "../../assets/images/ava-7.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slideToShow: 4,
    slideToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar01} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Ancient Alien Guy</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar02} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Peter Griffin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar03} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Antony Pepe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar04} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Random Smith</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar05} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Vito Scaleta</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar06} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Samson Somebody</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial px-3 py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem
          ipsa qui reiciendis aliquam sapiente porro hic commodi culpa alias
          consectetur, beatae consequatur vitae ratione debitis neque,
          laboriosam vel et?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar07} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">James Alberto</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
