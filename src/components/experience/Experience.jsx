import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
    return (
        <section id="experience">
            <h5>Experience</h5>
            <h2>Experience Front-end</h2>

            <div className="container-experience__container">
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>React.js</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>HTML</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>JavaScript</h4>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>Git</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>NodeJs</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill /> 
                            <h4>TypeScript</h4>
                        </article>
                    </div>
            </div>
        </section>
    ) 
}

export default Experience
