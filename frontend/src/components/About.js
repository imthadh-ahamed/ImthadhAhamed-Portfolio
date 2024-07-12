import React from "react";
import "../styles/styles.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I am <span className="highlight">Imthadh Ahamed</span>, an
          undergraduate at the
          <span className="highlight">
            {" "}
            Sri Lanka Institute of Information Technology (SLIIT)
          </span>
          . My journey in data science has been marked by a relentless pursuit
          of knowledge and hands-on experience in various technical domains. My
          professional experiences have equipped me with a diverse skill set and
          a proven track record of delivering impactful projects.
        </p>
        <p>
          I have successfully developed several innovative projects, showcasing
          my expertise in programming, web development, and data analysis. I
          thrive in collaborative environments, bringing a blend of technical
          expertise, creativity, and problem-solving skills to every project.
        </p>
        <p>
          I am eager to connect with like-minded professionals and explore
          opportunities to contribute to cutting-edge projects in data science
          and technology. Let's connect on{" "}
          <a
            href="https://www.linkedin.com/in/imthadh-ahamed0205"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>{" "}
          and explore my projects on{" "}
          <a
            href="https://github.com/imthadh-ahamed"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>{" "}
          to see how we can collaborate and drive innovation together!
        </p>
      </div>
    </section>
  );
}

export default About;
