import React from "react";
import './Projects.css';
import Littlelemonphoto from './Littlelemonphoto.png';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <section className="project">
        <h1>
          Projects
        </h1>
        <p>
          Here you will find some of the personal and clients projects that I created with each project containing its own case study
        </p>
      </section>
      <section className="project-item"> 
        <div className="project-item-image">
            <img src={Littlelemonphoto} alt="Little lemonphoto" />
        </div>
        <div className="project-item-content">
            <h3>Little Lemon</h3>
            <p>
            I created the Little Lemon website from start to finish,<br/>
            showcasing my passion for web development and design.<br/>
            As the sole developer, I designed an intuitive and visually <br/>
            appealing interface that embodies the essence of Little Lemon's brand.
            </p>
            <a href="CaseStudyPage">
              <button>case study</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
