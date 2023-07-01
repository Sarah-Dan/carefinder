import { Hero, HowItWorks, Testimonials, Footer } from "../../components";
import Button from "../../components/Button/Button";

import "./home.css";

// create a home component
const Home = () => {
  return (
    <main className="home">
      {/* hero section */}
      <Hero />
      <p>check out your profile</p>
      <a href="/profile">Profile</a>
      {/* welcome section */}
      <section className="section">
        <div className="welcome__container">
          <div className="welcome__container-left"> 
            <img
              className="patient__image1"
              src="./assets/patient01.png"
              alt="welcome"
            />
            <img
              className="patient__image2"
              src="./assets/patient02.png"
              alt="welcome"
            />
          </div>
          <div className="welcome__container-right">
            <div className="welcome__content">
              <h2>Welcome to </h2>
              <h1 className="welcome__title">CareFinder</h1>
            </div>
            <div>
              <p className="welcome__text">
              CareFinder is a platform where users can search for hosiptals in their areas, 
              export hospital details for your records and  enhance your healthcare experience by connecting with others and sharing valuable resources.
              </p>
            </div>
              <div>
              <Button title="Our Services" />
              </div>
          </div>          
        </div>
      </section>
      <section className="section">
        <div className="section__boxes">
          <div className="section__box">
            <img src="./assets/hospital.png" alt="welcome" />
            <h3>Find a Hospital</h3>
            <p>Effortlessly Find the Best Hospitals Near You</p>
          </div>
          <div className="section__box">
          <img src="./assets/doctoricon.png" alt="welcome" />
          <h3>Find a Doctor</h3>
          <p>Find the Best Doctors Near You</p>
          </div>
          <div className="section__box">
          <img src="./assets/saveline.png" alt="welcome" />
          <h3>Export Hospitals</h3>
          <p>Export Hospital Details for Your Records</p>
          </div>
          <div className="section__box">
          <img src="./assets/share.png" alt="welcome" />
          <h3>Share Hospitals</h3>
          <p>Share Hospitals with Others</p>
          </div>
        </div>
      </section>
      {/* how it works */}
      <HowItWorks />
      {/* testimonials */}
      <Testimonials />
      {/* footer */}
      <Footer />
      
    </main>
  );
};

// export the home component
export default Home;
