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
          , driven by a passion for data science and technology. My journey has
          equipped me with a diverse skill set and a proven track record in
          programming, web development, data analysis, and machine learning.
          Proficient in Python, JavaScript, and Java, I excel at using modern
          frameworks like React, Node.js, and Django to develop innovative
          projects and high-quality software solutions.
        </p>
        <p>
          My professional experiences have honed my ability to lead projects and
          work collaboratively in agile environments. I thrive on creativity and
          problem-solving, consistently delivering impactful projects. A strong
          advocate for continuous learning, I actively contribute to open-source
          projects and seek to connect with like-minded professionals.
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
          or{" "}
          <a
            href="https://drive.google.com/file/d/1V9ern4Tkbp8gzG5zGmzCgQXgZk_w-XWW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            CV
          </a>{" "}
          to see how we can collaborate and drive innovation together!
        </p>
      </div>
    </section>
  );
}

export default About;
