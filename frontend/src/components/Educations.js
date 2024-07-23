import React from "react";
import "../styles/styles.css";

function Educations() {
  const educations = [
    {
      year: "2022 - 2026",
      title: "Sri Lanka Institute of Information Technology (SLIIT)",
      company: "BSc (Hons) in Information Technology",
    },
    {
      year: "2011 - 2019",
      title: "KM/Zahira College Kalmunai",
      company: "Advanced Level - Physical Science",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Educations</h2>
      <div className="timeline">
        {educations.map((exp) => (
          <div key={exp.title} className="timeline-item">
            <div className="timeline-year">{exp.year}</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educations;
