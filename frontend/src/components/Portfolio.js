import React from "react";
import "../styles/styles.css";

function Portfolio() {
  const projects = [
    {
      title: "Final Marks Prediction",
      link: "https://github.com/imthadh-ahamed/Marks-Prediction-Machine-Learning-Project.git",
      technologies: "Python, Flask",
    },
    {
      title: "Weather Report Service - NodeJs-Backend-Application",
      link: "https://github.com/imthadh-ahamed/NodeJs-Backend-Application.git",
      technologies: "Node.js, Express.js",
    },
    {
      title: "To-Do Mobile Application",
      link: "https://github.com/imthadh-ahamed/Todo-App.git",
      technologies: "Kotlin",
    },
    {
      title: "School Event Management System",
      link: "https://github.com/imthadh-ahamed/School-Event-Management.git",
      technologies: "MERN Stack",
    },
    {
      title: "Blood Bank Management System",
      link: "https://github.com/imthadh-ahamed/Blood-bank-MS.git",
      technologies: "MERN Stack",
    },
    {
      title: "Online Banking Management",
      link: "https://github.com/imthadh-ahamed/Online-Banking-Management.git",
      technologies: "HTML, CSS, JavaScript, SQL, PHP",
    },
    {
      title: "Online Property Management System",
      link: "https://github.com/imthadh-ahamed/Online-Property-Management-System.git",
      technologies: "HTML, CSS, JavaScript, Java, SQL",
    },
    {
      title: "Snake Mobile Game",
      link: "https://github.com/imthadh-ahamed/Snake-Game.git",
      technologies: "Kotlin",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.title} className="portfolio-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
              <p>{project.technologies}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
