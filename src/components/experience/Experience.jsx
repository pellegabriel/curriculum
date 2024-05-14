import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  // Dividir tecnologías en dos columnas
  const columnOneTechnologies = [
   "ReactJS", "TypeScript", "NodeJS", "Scrum",
    "React Native", "Redux", "Notion", "Next14", "CLI",
    "Expo", "Go Chat GPT", "ES6",
    "Node", "HTML5", "CSS"
 ];
  const columnTwoTechnologies = [
   "AWS-Amplify", "AWS-S3",
    "Next JS", "JavaScript", "Agile methodology",
    "React Spring","Trello" , "React Query", "HOC",
    "Dedication", "Architecture", "Styled Components" , "Zustand","Figma", "SCSS"
  ];

  return (
    <section id="experience">
      <h2>Experience Front-end</h2>
      <div className="container-experience__container">
        <div className="experience__content">
          {columnOneTechnologies.map((tech) => (
            <article className="experience__details" key={tech}>
              <BsPatchCheckFill />
              <h4>{tech}</h4>
            </article>
          ))}
        </div>
        <div className="experience__content">
          {columnTwoTechnologies.map((tech) => (
            <article className="experience__details" key={tech}>
              <BsPatchCheckFill />
              <h4>{tech}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
