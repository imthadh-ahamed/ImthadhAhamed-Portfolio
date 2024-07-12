import React from "react";
import "../styles/styles.css";
import yourPhoto from "../images/BG Removed Image.png"; // replace with the correct path to your photo
import {
  FaFacebookF,
  FaEnvelope,
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
        <p> A passionate AI/ML | Data Enthusiast | Aspiring IT Professional </p>
        {/* <button>Contact Me</button> */}
      </div>
      <div className="home-photo">
        <img src={yourPhoto} alt="Imthadh Ahamed" />
        <div className="social-icons">
          <a
            href="https://fb.com/imthadhahamed476"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="mailto:imthadh.ahamed.iahs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/imthadh-ahamed0205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.link/1fmnm6"
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
