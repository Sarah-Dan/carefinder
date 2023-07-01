import SearchHospital from "../SearchHospital/SearchHospital";
import Button from "../Button/Button";
import "./hero.css";
// import { Link } from "react-router-dom";

// create a hero component

const Hero = () => {
  return (
    // <>
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__content-heading">
            Find the nearest hospital to you within seconds and book an
            appointment
          </h1>
          <p className="hero__content-text">
            Discover Your Perfect care: Find your hospital, Anytime, Anywhere!
          </p>
          <Button title="Get Started" />
          {/* <button className="hero-content_button">Get Started</button> */}
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <img
              src={"../assets/doctor.jpg"}
              alt="hero_image"
              className="hero-content_image"
            />
          </div>
        </div>
      </div>
      {/* search bar */}
      <SearchHospital />
    </div>

    // </>
  );
};

export default Hero;
