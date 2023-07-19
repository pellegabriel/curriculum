import React from "react";
import './portfolio.css'

const projects = [
    {
      title: "Parallax",
      iframe: "https://parallax-react-spring.netlify.app",
      page: "https://parallax-react-spring.netlify.app"
    },

    {
      title: "Cripto-Api",
      iframe: "https://criptapi.netlify.app/",
      page: "https://criptapi.netlify.app"
    },
    {
        title: "WeeOut",
        iframe: "https://main.d3tpf1tfcuyy4x.amplifyapp.com/",
        page: "https://main.d3tpf1tfcuyy4x.amplifyapp.com/"
      },
    {
      title: "Lottie Animation",
      iframe: "https://planta-grow-up.netlify.app",
      page: "https://planta-grow-up.netlify.app"
    },
    {
      title: "Menu Animation",
      iframe: "https://tucumtucum.netlify.app",
      page: "https://tucumtucum.netlify.app"
    },
    {
      title: "Lottie Animation 2",
      iframe: "https://planta-grow-up-2.netlify.app",
      page: "https://planta-grow-up-2.netlify.app"
    },
    {
      title: "TasksList",
      iframe: "https://tasksli.netlify.app/",
      page: "https://tasksli.netlify.app/"
    },
    {
      title: "PokeDex",
      iframe: "https://enciclopoke.netlify.app/",
      page: "https://enciclopoke.netlify.app"
    },
    {
      title: "Map YPF Points",
      iframe: "https://mapappoint.netlify.app",
      page: "https://mapappoint.netlify.app"
    },
    {
      title: "Movie Search",
      iframe: "https://buskdor.netlify.app/",
      page: "https://buskdor.netlify.app"
    },
    {
      title: "Rick and Morty's",
      iframe: "https://rymorty.netlify.app/",
      page: "https://rymorty.netlify.app"
    }
  ];
  

const Portfolio = () => {
  return (
    <section id="portfolio">

        <div className="portfolio__container">
            {projects.map((project, index) => (
                <div className="portfolio__item" key={index}>
                    <h3>{project.title}</h3>
                    <div className="portfolio__item-image">
                        <iframe src={project.iframe} title={project.title}></iframe>
                    </div>
                </div>
            ))}
        </div>
        </section>

  );
};

export default Portfolio;


