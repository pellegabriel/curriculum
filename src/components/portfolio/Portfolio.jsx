import React from "react";
import './portfolio.css';

const Portfolio = () => {
const experiences = [

  {
    title: "Front-end Developer at Dchess",
    period: "10/2023 - Present",
    description: "Dchess, a new way to play the time-honored game of chess. NFT game to play and win.",
    projects: [
      "Development of the next application with AWS, in React with Next14 and React Native.",
      "This project is the competition of chess.com, it is an incredible page to play chess."
    ]
  },
  {
    title: "React Native Developer and Frontend Web Developer at Teiki Company",
    period: "07/2022 - 01/2024",
    description: "Teiki: Mobile app development with react native cli and firebase"
  },
  {
    title: "Full Stack Developer at GaoTek",
    period: "10/2022 - 02/2023",
    description: "Leading global supplier based in New York and Toronto - 30 years of innovation.",
    projects: [
      "Web Development - Specialized in creating and optimizing frontend components using React."
    ]
  },   {
    title: "Front-end Developer at Coderhood",
    period: "06/2020 - 09/2022",
    description: "A community of developers whose vision is to offer educational opportunities to everyone in the world.",
    projects: [
      "Development of an online medication delivery system for pharmacies using React and Typescript.",
      "Our team develops a PaaS that integrates into sustainable business operations to measure the impact of all waste prevention using React, Typescript, React-Query and Material-UI."
    ]
  }
];
  return (
    <section id="portfolio">
    <h2>PORTFOLIO</h2>
      <div className="portfolio__container">
        {experiences.map((experience, index) => (
          <div className="portfolio__item" key={index}>
            <h3>{experience.title}</h3>
            <div>
              <span className="label">Period:</span>
              <span className="content">{experience.period}</span>
            </div>
            <div>
              <span className="label">Description:</span>
              <span className="content">{experience.description}</span>
            </div>
            {experience.projects && (
              <div>
                <span className="label">Projects:</span>
                <ul>
                  {experience.projects.map((project, idx) => (
                    <li className="content" key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
