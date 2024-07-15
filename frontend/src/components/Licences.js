import React from "react";
import "../styles/styles.css";

function Licences() {
  const certificates = [
    {
      title: " AI/ML Engineer - Stage 1",
      link: "https://code.sliit.org/certificates/pvjcnxwrfe",
      providers: "SLIIT",
    },
    {
      title: "Data Analytics Essentials",
      link: "https://www.credly.com/badges/4d906972-883b-45f7-b203-545cce35e856/linked_in_profile",
      providers: "Cisco",
    },
    {
      title: "Data Science",
      link: "https://www.credly.com/badges/9d868ea3-b73b-4629-8e5f-b10c2e3bf597/linked_in_profile",
      providers: "Cisco",
    },
    {
      title: "Python Essentials 1",
      link: "https://www.credly.com/badges/3d4ad2d5-acc7-404f-987e-dbb0063b0fd6/linked_in_profile",
      providers: "Cisco",
    },
    {
      title: "JavaScript Essentials 1",
      link: "https://www.credly.com/badges/fb9c3db8-960a-46f8-84fa-b896317d82fe/linked_in_profile",
      providers: "Cisco",
    },
    {
      title: "SQL for Data Science",
      link: "https://coursera.org/share/41cbf5a65b7f19e9d80a4bb34949d9c7",
      providers: "University of California, Davis",
    },
    {
      title: "Artificial Intelligence",
      link: "https://www.linkedin.com/learning/certificates/840b48040f4099fed6c86aa3043ef2159d30b15f504a839d9eb533534b780bcb",
      providers: "LinkedIn",
    },
    {
      title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/fc4365f4d3c457852f9fbfc45e325a04e5cb0ffc4ed49f5e1721a860ebb7df33",
      providers: "Microsoft",
    },
  ];

  return (
    <section id="licences" className="licences">
      <h2>Licences</h2>
      <div className="licences-grid">
        {certificates.map((certificate) => (
          <div key={certificate.title} className="licences-item">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{certificate.title}</h3>
              <p>{certificate.providers}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Licences;
