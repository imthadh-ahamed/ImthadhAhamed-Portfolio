import React from "react";
import "../styles/styles.css";

function Educations() {
  const educations = [
    {
      year: "2022 - 2026",
      title: "Sri Lanka Institute of Information Technology (SLIIT)",
      course: "BSc (Hons) in Information Technology",
    },
    {
      year: "2011 - 2019",
      title: "KM/Zahira College Kalmunai",
      course: "Advanced Level - Physical Science",
    },
  ];

  return (
    <section id="education" className="education">
      <h2>Educations</h2>
      <div className="timeline">
        {educations.map((edu) => (
          <div key={edu.title} className="timeline-item">
            <div className="timeline-year">{edu.year}</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <h4>{edu.course}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educations;
