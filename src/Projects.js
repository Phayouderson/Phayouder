import "./Projects.css";
import Littlelemonphoto from "./Littlelemonphoto.png";
import React, { useEffect, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import "@animxyz/core";
import { XyzTransition} from "@animxyz/react";


const projectsData = [
  {
    title: "Little Lemon",
    description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
    image: Littlelemonphoto,
    caseStudyLink: "CaseStudyPage",
    liveLink: "url",
    GitHubRepo: "GitHub Repo",
  },
  {
    title: "Little Lemon",
    description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
    image: Littlelemonphoto,
    caseStudyLink: "CaseStudyPage",
    liveLink: "url",
    GitHubRepo: "GitHub Repo",
  },
  {
    title: "Little Lemon",
    description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
    image: Littlelemonphoto,
    caseStudyLink: "CaseStudyPage",
    liveLink: "url",
    GitHubRepo: "GitHub Repo",
  },
  {
    title: "Little Lemon",
    description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
    image: Littlelemonphoto,
    caseStudyLink: "CaseStudyPage",
    liveLink: "url",
    GitHubRepo: "GitHub Repo",
  },
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
      <div className="project">
        <h1>Projects <br/><span className="textline"></span></h1>
      </div>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ project }) => {
  const ref = useRef();
  const xyz = "fade small stagger";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current.setAttribute('xyz', xyz);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [xyz]);
  return (
      <XyzTransition appear>
        <Link to="/CaseStudyPage">
          <section ref={ref} className="project-item">
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
            </div>
          </section>
        </Link>

      </XyzTransition>
  );
};

export default Projects;


