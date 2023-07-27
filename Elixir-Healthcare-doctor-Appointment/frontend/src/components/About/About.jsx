import React from "react";
import aboutImg from "../../assets/images/about1.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w[670px] order-1 lg:order-2">
            <h2 className="heading"> Proud to be one of the nation's best</h2>
            <p className="text__para mt-[30px]">
              Our medical clinic is dedicated to providing high-quality,
              compassionate healthcare to patients of all ages. Our team of
              experienced medical professionals is committed to delivering
              personalized care that meets the unique needs of each patient. We
              offer a wide range of services, including preventive care, chronic
              disease management, and acute care. Our state-of-the-art
              facilities and advanced medical technology ensure that our
              patients receive the best possible care.
            </p>
            <p className="text__para mt-[30px]">
              Our clinic is equipped with the latest medical technology,
              allowing us to provide our patients with the most advanced and
              effective treatments. We are committed to providing our patients
              with compassionate and personalized care, and we work closely with
              each patient to develop a customized treatment plan that meets
              their unique needs. Our clinic is conveniently located and offers
              flexible appointment scheduling to accommodate the busy lives of
              our patients
            </p>
            <Link to="/">
              {" "}
              <button className="btn hover:bg-yellowColor">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
