import React from "react";
import "../styles/styles.css";

function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Data Management Coordinator",
      company: "Corporate Services (Private) Limited",
      description: `
        - Led a team of data entry specialists, increasing data accuracy by 20%.
        - Collaborated with a team to streamline content production, reducing turnaround time by 15%.
        - Developed a comprehensive dashboard using MS Excel and Power BI to enhance data visibility and streamline categorization processes by 30%.
        - Refined categorization processes, ensuring seamless operations and improved data management.
        - Coordinated among team members to improve workflow efficiency and collaboration.
        - Led and organized data management tasks using GitHub, Power BI, and Excel, improving data accuracy and team efficiency.
      `,
    },
    {
      year: "2020 - 2023",
      title: "Creative Writer - Part time",
      company: "Express Newspapers (Ceylon) PVT LTD",
      description: `
        - Worked part-time for Express Newspapers (Ceylon) Pvt Ltd, contributing to 20+ writing projects.
        - Collaborated with the editorial team to produce engaging content for diverse publications, reducing turnaround time by 15%.
        - Generated creative ideas, conducted thorough research, and maintained flexible scheduling to ensure timely delivery of articles.
        - Contributed to enriching Express Newspapers' storytelling while balancing other commitments.
        - Managed time effectively and adapted to a part-time role, ensuring consistent content quality.
      `,
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.title} className="timeline-item">
            <div className="timeline-year">{exp.year}</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>
                {exp.description
                  .trim()
                  .split("\n")
                  .map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
