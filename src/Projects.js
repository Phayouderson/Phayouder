import React from "react";
import "./Projects.css";
import Littlelemonphoto from "./Littlelemonphoto.png";

const projectsData = [
  {
    title: "Little Lemon",
    description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
    image: Littlelemonphoto,
    caseStudyLink: "CaseStudyPage",
    liveLink: "url",
    GitHubRepo: "GitHub Repo",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <section className="project">
        <h1>Projects</h1>
        <p>
        Here you will find some of the personal and clients projects that 
        I've created, with each project featuring its own details including 
        live links and GitHub repositories.
        </p>
      </section>
      {projectsData.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectItem = ({ project }) => {
  return (
    <section className="project-item">
      <div className="project-item-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-item-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button>Live Link</button>
          </a>
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
            <button>GitHub Repo</button>
          </a>
        </div>
    </section>
  );
};

export default Projects;
