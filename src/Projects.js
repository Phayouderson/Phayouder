import "./Projects.css";
import Littlelemonphoto from "./Littlelemonphoto.png";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.from(".projec", {duration: 2,
      opacity:1,
      y:150,
      stagger:0.25,
      scrollTrigger: {
        trigger: ".projec",
        start: "top bottom", // Animation starts when the top of ".project-item" hits the bottom of the viewport
        // toggleActions: "play none none none"
      }
         });
  }, []);
  return (
    <div id="projects" className="projects-container ">
      <div className="project">
        <h1>Projects <br/><scan className="textline"></scan></h1>
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
  return (
    <section className="project-item ">
    <div className="project-cart">
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        </div>
        
    </section>
  );
};

export default Projects;

