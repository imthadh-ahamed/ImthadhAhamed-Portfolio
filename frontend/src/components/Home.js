import React from "react";
import "./styles.css";
import yourPhoto from "./path-to-your-photo.jpg"; // replace with the correct path to your photo
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          I'm <span className="highlight">Imthadh Ahamed</span>
        </h1>
        <p>Software Developer & Data Scientist</p>
        <button>Contact Me</button>
      </div>
      <div className="home-photo">
        <img src={yourPhoto} alt="Imthadh Ahamed" />
        <div className="social-icons">
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.whatsapp.com/send?phone=your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
