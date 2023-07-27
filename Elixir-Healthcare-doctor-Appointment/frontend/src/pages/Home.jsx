import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";

const Home = () => {
  return (
    <>
      {/* Hero  */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading[70px]">
                    We are the Elixir For Your Long Life
                  </h1>
                  <p className="text__para">
                    “Welcome to the Elixir Healthcare, where we provide
                    comprehensive and compassionate healthcare services to
                    patients of all ages. Our team of highly skilled and
                    experienced medical professionals is dedicated to providing
                    the highest quality care across a wide range of specialties,
                    including cardiology, neurology, orthopedics, and more. With
                    state-of-the-art facilities and advanced medical technology,
                    we are committed to delivering the best possible outcomes
                    for our patients. Thank you for choosing us as your
                    healthcare provider.”
                  </p>
                  <button className="btn hover:bg-yellowColor">
                    Request an Appoinment
                  </button>

                  {/* hero counter */}
                  <div className="mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                    <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                        30+
                      </h2>
                      <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Years of Experience</p>
                    </div>

                    <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                        300+
                      </h2>
                      <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Clinics Worldwide</p>
                    </div>

                    <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                        100%
                      </h2>
                      <span className="w-[100px] h-2 bg-cyan-500 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Patient Satisfication</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero content */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg01} alt="heroImg01" />
                </div>
                <div className="mt-[30px]">
                  <img
                    src={heroImg02}
                    alt="heroImg02"
                    className="w-full mb-[30px]"
                  />
                  <img src={heroImg03} alt="heroImg03" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* hero section 2 */}

        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing The Best Medical Solutions
              </h2>
              <p className="text__para text-center">
                World class care for everyone. Our Health System Offers
                unmathed, expert health care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="icon01" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                    search for a doctor near you. Our database includes doctors
                    across a wide range of specialties, so you can find the
                    right healthcare provider for your needs.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-cyan-500 mt-[30px] mx-auto flex items-center justify-center
                    group hover:bg-cyan-500 hover:border-none transition-all duration-300 ease-in-out"
                  >
                    <BsArrowRight className="group-hover: text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="icon01" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                    Search for the nearest clinic to your location. Our database
                    includes clinics that provide a wide range of healthcare
                    services.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-cyan-500 mt-[30px] mx-auto flex items-center justify-center
                    group hover:bg-cyan-500 hover:border-none transition-all duration-300 ease-in-out"
                  >
                    <BsArrowRight className="group-hover: text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="icon01" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book an Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                    schedule an appointment with a doctor of your choice. Our
                    easy-to-use online booking system allows you to choose the
                    date and time that works best for you.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-cyan-500 mt-[30px] mx-auto flex items-center justify-center
                    group hover:bg-cyan-500 hover:border-none transition-all duration-300 ease-in-out"
                  >
                    <BsArrowRight className="group-hover: text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />

        {/* services */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Medical Services</h2>
              <p className="text__para text-center">
                Our Healthcare is dedicated to providing the highest quality
                medical services to our patients and the community. Our team of
                experienced doctors, nurses, and healthcare professionals work
                tirelessly to ensure that our patients receive the best possible
                care.
              </p>
            </div>
            <ServiceList />
          </div>
        </section>
        {/* features */}

        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              {/* features content */}
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  {" "}
                  Get Online Treatment <br />
                  Anytime{" "}
                </h2>
                <ul className="pl-4">
                  <li className="text__para">
                    1. <b>Online appointment scheduling</b> - Allow patients to
                    schedule appointments with doctors or specialists directly
                    through the website.
                  </li>
                  <li className="text__para">
                    2. <b>Virtual consultations</b> - Offer virtual
                    consultations with doctors or specialists through video or
                    audio calls.
                  </li>
                  <li className="text__para">
                    3. <b> Prescription management</b> - Allow patients to
                    manage their prescriptions, including requesting refills and
                    viewing their medication history.
                  </li>
                  <li className="text__para">
                    4. <b>Online bill payment</b> - Provide patients with the
                    option to pay their bills online through a secure payment
                    gateway.
                  </li>
                  <li className="text__para">
                    5. <b>Patient portal</b> - Create a secure patient portal
                    where patients can access their medical records, test
                    results.
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn hover:bg-yellowColor">
                    Learn More
                  </button>
                </Link>
              </div>

              {/* features image */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} className="w-3/4" alt="" />
                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] lg:px-4 rounded-[10px]">
                  <div className=" flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font=[600]">
                        Tue 18
                      </p>
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font=[600]">
                        01:00 PM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-0 lg:px-0">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>

                  <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                    consultation
                  </div>

                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                    <img src={avatarIcon} alt="" />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                      Akhil P
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* doctors */}
        <section>
          <div className="container"></div>
        </section>
      </>
    </>
  );
};

export default Home;
