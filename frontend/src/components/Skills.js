import React from "react";
import "../styles/styles.css";

function Skills() {
  const skills = {
    "Programming Languages": [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "Kotlin",
      "C#",
    ],
    "Web Development": [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "Bootstrap",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
      "Redux",
      "Flask",
      "PHP",
    ],
    "Frameworks and Tools": [
      "Spring Boot",
      ".NET",
      "Docker",
    ],
    "Databases": [
      "MySQL",
      "SQLite",
      "MongoDB",
      "Firebase",
    ],
    "IDEs and ICEs": [
      "Visual Studio Code",
      "PyCharm",
      "Eclipse IDE",
      "IntelliJ IDEA",
      "R Studio",
      "Dev C++",
      "Jupyter Notebook",
      "Google Colab",
    ],
    "Data Analysis and Visualization": [
      "Excel",
      "Power BI",
      "Tableau"
    ],
    "Cloud and Deployments": [
      "AWS",
      "Azure",
      "Vercel",
    ],
    "Version Control": [
      "Git",
      "GitHub"
    ],
    "Others": [
      "API Integrations",
    ],
  };

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {skills[category].map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
